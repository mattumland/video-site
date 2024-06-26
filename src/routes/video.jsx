import VideoCard from "../components/VideoCard";
import VideoContext from '../context/videoContext'
import { LoadingSpinner } from "../components/Loading";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import { getSingleVideo, getVideoComments } from "../apiCalls";

export const VideoPage = () => {
  const { videoId } = useParams();
  const [state, dispatch] = useContext(VideoContext)
  const [comments, setComments] = useState()
  const [video, setVideo] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getSingleVideo(videoId), getVideoComments(videoId)])
    .then((videoData) => {
      setVideo(videoData[0].video)
      setComments(videoData[1].comments)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading
        ? <LoadingSpinner />
        : <VideoCard
            title={video.title}
            url={video.video_url}
            description={video.description}
            commentCount={video.num_comments}
            createdDate={video.created_at}
            key={video.id}
          />
      }
    </>
  )
}
