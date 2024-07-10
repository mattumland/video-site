import styled from "styled-components";
import { useState, useContext } from "react";
import VideoContext from '../context/videoContext'
import { formatDate, formatUserId, formatUserInitials } from "../helpers";
import { FlexContainer, StyledButton } from "../styledElements";
import { addComment } from "../apiCalls";

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: .5rem;
  border: 1px solid var(--font-color);
  border-radius: 5px;

  input {
    border: none;
    border-bottom: 1px solid var(--font-color);
    font-style: italic;
    margin-top: .5rem;
  }
`

const CommentButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: .5rem;
  margin-left: auto;
`

const Comment = styled.div`
  display: flex;
  margin: 1rem 0;

  span {
    font-style: italic;
  }
`

const CommentInitials = styled.p`
  min-width: 3rem;
  height: 3rem;
  background-color: var(--font-color);
  margin-right: .5rem;
  padding: 1rem 0;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  color: var(--card-color);
`

const CommentContent = styled.p`
  margin-top: .25rem;
`

const CommentSection = ({videoId, comments, refetchComments}) => {
  const [state] = useContext(VideoContext)
  const [comment, setComment] = useState('')

  const sendCommentsAndRefetch = async (commentData) => {
    await addComment(commentData);
    await refetchComments(videoId)
  }

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment) {
      const commentData = {
        "content": comment,
        "video_id": videoId,
        "user_id": state.user_id
      }

      sendCommentsAndRefetch(commentData)
      setComment("")
    }
  }

  return (
    <>
      <CommentForm onSubmit={handleSubmit}>
        <input type="text" name="comment" value={comment} placeholder="Leave a comment" onChange={handleChange}></input>
        <CommentButtons>
          <StyledButton disabled={comment.length === 0} onClick={() => setComment("")}>cancel</StyledButton>
          <StyledButton disabled={comment.length === 0} type="submit">comment</StyledButton>
        </CommentButtons>
      </CommentForm>

      {comments.map((comment) => {
        return (
          <Comment key={comment.id}>
            <CommentInitials>{formatUserInitials(comment.user_id)}</CommentInitials>
            <div>
              <FlexContainer>
                <p>{formatUserId(comment.user_id)}</p>
                <span>{formatDate(comment.created_at)}</span>
              </FlexContainer>
              <CommentContent>{comment.content}</CommentContent>
            </div>
          </Comment>
        )
      })}
    </>
  )
}

export default CommentSection
