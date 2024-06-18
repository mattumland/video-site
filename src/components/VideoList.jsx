import styled from 'styled-components'
import { useContext } from 'react'
import VideoContext from '../context/videoContext'
import VideoCard from './VideoCard'

const StyledVideoList = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`

const ListTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--font-color);
`

const ListContainer = styled.div`
  display: flex;
  gap: .5rem;
`

const VideoList = () => {
  const [state, dispatch] = useContext(VideoContext)

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
      <ListTitle>My Videos</ListTitle>
      <ListContainer>
        {videoCards}
      </ListContainer>
    </StyledVideoList>
  )
}

export default VideoList