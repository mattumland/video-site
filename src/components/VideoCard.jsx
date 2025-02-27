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
  border: 1px solid var(--main-color);
  width: 100%;
  text-decoration: none;

  &:hover {
    color: grey;
    transition: all 0.2s ease-in-out;
  }
`

const OverflowContainer = styled.div`
  overflow: hidden;
`

const HoverWrapper = styled(VideoWrapper)`
  &:hover {
    transform: scale(1.05);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    transform: scale(1.05);
    transition: transform 300ms;
    transition: all 0.2s ease-in-out;
  }
`

const VideoPlaceholderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 2rem 0;
  color: var(--card-color);
  background-color: var(--main-color);

  img {
    max-width: 125px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const VideoPlaceHolder = () => {
  return (
    <VideoPlaceholderContainer>
      <img src="images/LOGO_ICON.png" alt="Learnwell logo"/>
    </VideoPlaceholderContainer>
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
      <OverflowContainer>
        <HoverWrapper>
          <StyledReactPlayer
            url={url}
            width='100%'
            height='100%'
            playIcon={<BlankIcon />}
            light={needsPlaceHolder() ? <VideoPlaceHolder /> : true}
            fallback={<LoadingSpinner />}
            previewTabIndex={-1}
          />
        </HoverWrapper>
      </OverflowContainer>
      <CardFooter
        title={title}
        description={description}
        commentCount={commentCount}
        createdDate={createdDate}
        card={true}
      />
    </StyledCard>
  )
}

export default VideoCard
