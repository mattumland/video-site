import VideoCard from "../components/VideoCard";
import VideoContext from '../context/videoContext'
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from 'react'

export const idLoader = async ( {params} ) => {
  const videoId = params.videoId
  return { videoId }
}

export const VideoPage = () => {
  const { videoId } = useLoaderData();
  const [state, dispatch] = useContext(VideoContext)

  const video = state.videos.find((video) => video.id === videoId)

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
}
