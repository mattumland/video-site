import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import { MaxWidthContainer, StyledButton } from "../styledElements";

const ErrorContainer = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin: 2rem 0;
  }

  img {
    max-width: 600px;
    margin: 0 auto;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  a {
    color: var(--main-color);
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      color: white;
      background-color: var(--main-color);
    }
  }
`

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ErrorContainer id="error-page">
      <img src="/images/FULL_LOGO_COLOR.png" alt="Learnwell" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>Return Home</Link>
    </ErrorContainer>
  );
}
