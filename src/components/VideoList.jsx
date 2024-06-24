import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import VideoContext from '../context/videoContext'
import VideoCard from './VideoCard'
import AddVideoButton from './AddVideoButton'

const StyledVideoList = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`

const ListTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ListTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--font-color);
`

const ListContainer = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const VideoList = () => {
  const [state, dispatch] = useContext(VideoContext)

  useEffect(() => {
  }, [state.videos])

  const videoCards = state.videos.map(video => {
    return (
      <VideoCard
        title={video.title}
        url={video.video_url}
        description={video.description}
        commentCount={video.num_comments}
        createdDate={video.created_at}
        key={video.id}
      />
    )
  })

  return (
    <StyledVideoList>
      <ListTopContainer>
        <ListTitle>My Videos</ListTitle>
        <AddVideoButton/>
      </ListTopContainer>
      <ListContainer>
        {videoCards}
      </ListContainer>
    </StyledVideoList>
  )
}

export default VideoList
