import styled from "styled-components";
import { Link } from "react-router-dom";
import CardFooter from "./CardFooter";
import { VideoWrapper, StyledReactPlayer } from "../styledElements.js"

const StyledCard = styled.div`
  background-color: var(--card-color);
  color: var(--card-text);
  margin: .5em 0;
  border-radius: 3px;
  border: 1px solid var(--font-color);
  width: 100%;
  overflow: hidden;

  a {
    color: var(--card-text);
    text-decoration: none;
  }
`

const HoverWrapper = styled(VideoWrapper)`
  &:hover {
    transform: scale(1.01);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }
`

const VideoCard = ({title, url, description, commentCount, createdDate, id}) => {
  return (
    <StyledCard>
      <Link to={`video/${id}`}>
      <HoverWrapper>
        <StyledReactPlayer
          url={url}
          light={true}
          width='100%'
          height='100%'
        />
      </HoverWrapper>
      <CardFooter
        title={title}
        description={description}
        commentCount={commentCount}
        createdDate={createdDate}
        $card
      />
      </Link>
    </StyledCard>
  )
}

export default VideoCard
