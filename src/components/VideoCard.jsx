import styled from "styled-components";
import ReactPlayer from 'react-player/lazy'
import { formatDate } from "../helpers";
import { CommentCount } from "./CommentCount";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background-color: var(--card-color);
  color: var(--card-text);
  margin: .5em 0;
  border-radius: 3px;
  width: 100%;
  overflow: hidden;

  a {
    color: var(--card-text);
    text-decoration: none;
  }

`

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  &:hover {
    transform: scale(1.01);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }

`

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

const CardFooter = styled.div`
  padding: .5rem;
  border: 1px solid var(--font-color);
  border-top: none;
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

const VideoCard = ({title, url, description, commentCount, createdDate, id}) => {
  return (
    <StyledCard>
      <Link to={`video/${id}`}>
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
      </Link>
    </StyledCard>
  )
}

export default VideoCard
