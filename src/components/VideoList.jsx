import styled from 'styled-components'
import VideoCard from './VideoCard'

const video = {
  "created_at": "2024-06-13T18:26:06.776751+00:00",
  "video_url": "https://www.youtube.com/watch?v=qji2HZJvfwc",
  "user_id": "matt_umland",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "title": "MoSH Review",
  "num_comments": 0,
  "id": "7a3NIec1gYAzurzhQ0uS"
}

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
`

const VideoList = () => {
  return (
    <StyledVideoList>
      <ListTitle>My Videos</ListTitle>
      <ListContainer>
        <VideoCard
          title={video.title}
          url={video.video_url}
          description={video.description}
          commentCount={video.num_comments}
          createdDate={video.created_at}
          key={video.id}
        />
      </ListContainer>
    </StyledVideoList>
  )
}

export default VideoList