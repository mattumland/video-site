import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: var(--max-width);
  margin: 0 auto;
`

const StyledLogo = styled.img`
  @media (max-width: 726px) {
    max-width: 280px;
  }

  @media (max-width: 420px) {
    max-width: 200px;
  }
`
const Layout = () => {

  return (
    <StyledHeader>
      <StyledLogo src="/images/FULL_LOGO_COLOR.png" alt="Learnwell"/>
    </StyledHeader>
  )
}

export default Layout