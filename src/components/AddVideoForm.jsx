import styled from "styled-components";
import VideoContext from '../context/videoContext'
import { useState, useContext } from "react";
import { addNewVideo, getUserVideos } from "../apiCalls";

const ModalShadow = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const ModalContainer = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  background-color: var(--card-color);

  @media (max-width: 500px) {
    left: 0px;
    margin: 0 1rem;
  }
`

const ModalError = styled.p`
  width: 100%;
  text-align: center;
  padding: .5rem 0;
  background-color: red;
  color: var(--card-color);
  font-weight: bolder;
  font-size: 1.25rem;
`

const ModalHeader = styled.div`
  padding: .5rem;
  background-color: var(--font-color);
  color: var(--card-color);
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    padding: .25rem 0;
  }
`

const CloseButton = styled.div`
  font-size: .75rem;
  text-align: center;

  &:hover {
    color: var(--font-color);
    background-color: var(--card-color);
  }

  svg {
    color: var(--card-color)
  }
`

const CloseSvg = styled.svg`
  fill: var(--card-color);
  &:hover {
    fill: var(--font-color);
  }
`

const StyledForm = styled.form`
  padding: .5rem;
`

const StyledInput = styled.input`
  width: 100%;
  margin: .25rem 0 .75rem 0;
  border: 1px solid var(--font-color);
  border-radius: 3px;
  min-height: 1.75rem;
`

const SubmitButton = styled.button`
  color: var(--font-color);
  border: 2px solid var(--font-color);
  border-radius: 3px;
  width: 100%;
  margin-top: .5rem;
  padding: .5rem;
  font-weight: bold;

  &:hover {
    color: var(--card-color);
    background-color: var(--font-color);
  }
`

const AddVideoForm = ({onClose, setVideos, setLoading}) => {
  const [state, dispatch] = useContext(VideoContext)
  const [error, setError] = useState(null)

  const sendVideoAndRefetch = async (videoData) => {
    setLoading(true)
    await addNewVideo(videoData)
    .catch(err => console.log(err))
    await getUserVideos(state.user_id)
    .then((data) => {
      setVideos(data.videos)
      setLoading(false)
      onClose()
    })
    .catch(err => alert(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const videoData = {
      'description': formData.get("description"),
      'video_url': formData.get("video_url"),
      'title': formData.get("title"),
      'user_id': state.user_id
    }

    sendVideoAndRefetch(videoData);
  }

const CloseIcon = () => {
  return (
    <CloseSvg width="30" height="30" viewBox="0 0 30 30">
      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
    </CloseSvg>
  )
}

  return (
    <>
      <ModalShadow onClick={onClose} />
        <ModalContainer>
          <ModalHeader>
            <h3>Add New Video</h3>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
          {error &&
            <ModalError>{error}</ModalError>
          }
          <StyledForm onSubmit={handleSubmit}>
            <label>Title</label>
            <StyledInput type="text" name="title" required autoFocus/>

            <label>Description</label>
            <StyledInput type="text" name="description" required />

            <label>Video URL</label>
            <StyledInput type="url" name="video_url" required />

            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        </ModalContainer>
    </>
  );
}

export default AddVideoForm
