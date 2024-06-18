import styled from "styled-components";
import ReactPlayer from 'react-player'
import { formatDate } from "../helpers";
import { CommentCount } from "./CommentCount";

const StyledCard = styled.div`
  background-color: var(--card-color);
  color: var(--card-text);
  margin: .5em 0;
  border-radius: 3px;
  width: 100%;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

const CardFooter = styled.div`
  margin: .5rem;
`

const VideoTitle = styled.h3`
  font-size: 1.5rem;
`
const VideoDetails = styled.div`
 display: flex;
 gap: .5rem;
 align-items: center;
`

const Description = styled.p`
  height: 2rem;
  overflow: hidden;
`

const AccessibleCommentCount = styled.p`
  font-size: 0;
`

const VideoCard = ({title, url, description, commentCount, createdDate}) => {
  return (
    <StyledCard>
      <VideoWrapper>
        <StyledReactPlayer
          url={url}
          // controls={true}
          light={true}
          width='100%'
          height='100%'
        />
      </VideoWrapper>
      <CardFooter>
        <VideoTitle>{title}</VideoTitle>
        <VideoDetails>
          <p>{`Posted on ${formatDate(createdDate)}`}</p>
          <CommentCount count={commentCount}/>
          <AccessibleCommentCount>{`${commentCount} comments`}</AccessibleCommentCount>
        </VideoDetails>
        <Description>{description}</Description>
      </CardFooter>
    </StyledCard>
  )
}

export default VideoCard