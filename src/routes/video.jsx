import SingleVideoDisplay from "../components/SingleVideo";
import { LoadingSpinner } from "../components/Loading";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getSingleVideo, getVideoComments } from "../apiCalls";

export const VideoPage = () => {
  const { videoId } = useParams();
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

  const refetchComments = async (videoId) => {
    await getVideoComments(videoId)
    .then((commentData) => {
      setComments(commentData.comments)
    })
  }

  return (
    <>
      {loading
        ? <LoadingSpinner />
        : <SingleVideoDisplay
            title={video.title}
            url={video.video_url}
            description={video.description}
            commentCount={video.num_comments}
            createdDate={video.created_at}
            videoId={videoId}
            comments={comments}
            refetchComments={refetchComments}
          />
      }
    </>
  )
}
