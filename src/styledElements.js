import styled from "styled-components"
import ReactPlayer from 'react-player/lazy'


export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`

export const MaxWidthContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 .5rem;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const StyledButton = styled.button`
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 0 .5rem;
  font-weight: bold;
  background-color: var(--card-color);

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  ${(props) =>
    !props.disabled &&
      `&:hover {
        color: var(--card-color);
        background-color: var(--main-color);
    }`}

  ${(props) =>
    !props.disabled &&
      `&:active {
        color: var(--card-color);
        background-color: var(--main-color);
    }`}
`
