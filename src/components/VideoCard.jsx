import styled from "styled-components";
import { Link } from "react-router-dom";
import CardFooter from "./CardFooter";
import { VideoWrapper, StyledReactPlayer } from "../styledElements.js"
import { LoadingSpinner } from "./Loading.jsx";

const StyledCard = styled(Link)`
  background-color: var(--card-color);
  color: var(--card-text);
  margin: .5em 0;
  border-radius: 3px;
  border: 1px solid var(--font-color);
  width: 100%;
  overflow: hidden;
  text-decoration: none;
`

const HoverWrapper = styled(VideoWrapper)`
  z-index: 0;

  &:hover {
    transform: scale(1.02);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    transform: scale(1.02);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }
`

const VideoPlaceContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 5rem 0;
  color: var(--card-color);
  background-color: var(--font-color);

  img {
    max-width: 125px;
  }
`

const VideoPlaceHolder = () => {
  return (
    <VideoPlaceContainer>
      <img src="images/LOGO_ICON.png" />
    </VideoPlaceContainer>
  )
}

const BlankIcon = () => {
  return (
    <></>
  )
}

const VideoCard = ({title, url, description, commentCount, createdDate, id}) => {
  const sitesWithoutThumbnails = [
    'fb',
    'facebook',
    'mixcloud',
    'wistia'
  ]

  const needsPlaceHolder = () => {
    let returnValue = false

    sitesWithoutThumbnails.forEach((site) => {
      if (url.includes(site)) {
        returnValue = true;
      }
    })

    return returnValue
  }

  return (
    <StyledCard to={`video/${id}`}>
      <HoverWrapper>
        <StyledReactPlayer
          url={url}
          width='100%'
          height='100%'
          playIcon={<BlankIcon />}
          light={needsPlaceHolder() ? <VideoPlaceHolder /> : true}
          fallback={<LoadingSpinner />}
        />
      </HoverWrapper>
      <CardFooter
        title={title}
        description={description}
        commentCount={commentCount}
        createdDate={createdDate}
        $card
      />
    </StyledCard>
  )
}

export default VideoCard
