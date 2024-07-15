import CardFooter from "./CardFooter";
import CommentSection from "./CommentSection.jsx";
import { VideoWrapper, StyledReactPlayer, MaxWidthContainer } from "../styledElements.js"
import { LoadingSpinner } from "./Loading.jsx";


const SingleVideoDisplay = ({
  title, url, description, createdDate, commentCount, videoId, comments, refetchComments
}) => {
  return (
    <MaxWidthContainer>
      <VideoWrapper>
        <StyledReactPlayer
          url={url}
          controls={true}
          width='100%'
          height='100%'
          fallback={<LoadingSpinner />}
        />
      </VideoWrapper>
      <CardFooter
        title={title}
        description={description}
        commentCount={commentCount}
        createdDate={createdDate}
        $card
      />
      <CommentSection videoId={videoId} comments={comments} refetchComments={refetchComments} />
    </MaxWidthContainer>
  )
}

export default SingleVideoDisplay;
