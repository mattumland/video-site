import CardFooter from "./CardFooter";
import CommentSection from "./CommentSection.jsx";
import { VideoWrapper, StyledReactPlayer, MaxWidthContainer } from "../styledElements.js"


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
        />
      </VideoWrapper>
      <CardFooter
        title={title}
        description={description}
        commentCount={commentCount}
        createdDate={createdDate}
        card={false}
      />
      <CommentSection videoId={videoId} comments={comments} refetchComments={refetchComments} />
    </MaxWidthContainer>
  )
}

export default SingleVideoDisplay;
