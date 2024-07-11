import styled from "styled-components";
import { CommentCount } from "./icons";
import { formatDate } from "../helpers";

const FooterContainer = styled.div`
  margin-top: ${(props) => props.$card ? '0' : '.5rem'};
  padding: ${(props) => props.$card ? '.5rem' : '0'};
  border-top: none;
`

const VideoTitle = styled.h3`
  font-size: 1.5rem;
`
const VideoDetails = styled.div`
 display: flex;
 gap: .5rem;

 p {
  margin-top: .25rem;
  font-style: italic;
 }
`

const Description = styled.p`
  margin-top: .5rem;
  height: ${(props) => props.$card ? '2rem' : 'auto'};
  overflow: ${(props) => props.$card ? 'hidden' : 'visible'};
`

const AccessibleCommentCount = styled.p`
  font-size: 0;
`

const CardFooter = ({title, description, commentCount, createdDate, card = false}) => {
  return (
    <FooterContainer $card>
      <VideoTitle>{title}</VideoTitle>
      <VideoDetails>
        <p>{`Posted on ${formatDate(createdDate)}`}</p>
        {card && <CommentCount count={commentCount}/>}
        <AccessibleCommentCount>{`${commentCount} comments`}</AccessibleCommentCount>
      </VideoDetails>
      <Description $card>{description}</Description>
    </FooterContainer>
  )
}

export default CardFooter
