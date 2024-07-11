import styled, { keyframes } from "styled-components";

const Container = styled.div`
  justify-content: center;
  text-align: center;
  margin: 5rem 0;
  min-height: 650px;
  color: var(--font-color);

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 726px) {
    min-height: 350px;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--font-color);
  border-right: 2px solid var(--font-color);
  border-bottom: 2px solid var(--font-color);
  border-left: 4px solid var(--font-color);
  background: transparent;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const LoadingSpinner = () => {
  return (
    <Container>
      <Spinner />
      <p>Loading</p>
    </Container>
  );
}
