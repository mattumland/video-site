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
  color: var(--main-color);
`

const ListContainer = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const EmptyListContainer = styled.div`
  text-align: center;
  min-height: 650px;
  grid-area: 1 / 1 / 2 / 3;
  color: var(--main-color);
  font-size: 1.75rem;

  p {
    margin-top: 1rem;
  }

  @media (max-width: 726px) {
    min-height: 350px;
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
        {loading
          ? <LoadingSpinner />
          : <ListContainer>
              {videos.length === 0
                ? <EmptyListContainer>
                  <p>You don't have any videos.</p>
                  <p>Upload a video to get started.</p>
                 </EmptyListContainer>
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
        }
    </MaxWidthContainer>
  )
}

export default VideoList
