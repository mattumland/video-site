import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import VideoContext from '../context/videoContext'
import VideoCard from './VideoCard'
import AddVideoButton from './AddVideoButton'
import { MaxWidthContainer } from '../styledElements.js'
import { LoadingSpinner } from './Loading'
import { getUserVideos } from '../apiCalls'

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
  const [state] = useContext(VideoContext)
  const [videos, setVideos] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserVideos(state.user_id)
    .then((data) => {
      setVideos(data.videos)
      setLoading(false)
    })
    .catch(err => alert(err))
  }, [])

  return (
    <MaxWidthContainer>
      <ListTopContainer>
        <ListTitle>My Videos</ListTitle>
        <AddVideoButton setVideos={setVideos} setLoading={setLoading}/>
      </ListTopContainer>
      <ListContainer>
        {loading
          ? <LoadingSpinner />
          : videos.map(video => {
              return (
                <VideoCard
                  title={video.title}
                  url={video.video_url}
                  description={video.description}
                  commentCount={video.num_comments}
                  createdDate={video.created_at}
                  id={video.id}
                  key={video.id}
                />
              )
            })
        }
      </ListContainer>
    </MaxWidthContainer>
  )
}

export default VideoList
