import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--main-color);
`

const StyledHeader = styled.header`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0 .5rem;
`

const StyledLogo = styled.img`
  @media (max-width: 726px) {
    max-width: 280px;
  }

  @media (max-width: 420px) {
    max-width: 200px;
  }
`

const StyledFooter = styled.footer`
  max-width: var(--max-width);
  margin: 1rem auto;
  text-align: center;

  a {
    color: var(--main-color);
  }
`
const Layout = () => {
  return (
    <main>
      <HeaderContainer>
        <StyledHeader>
          <Link to='/'>
            <StyledLogo src="/images/FULL_LOGO_WHITE.png" alt="Learnwell" />
          </Link>
        </StyledHeader>
      </HeaderContainer>
      <Outlet />
      <StyledFooter>
        <a href='https://mattumland.dev' target='_blank' >@2024 Matt Umland</a>
      </StyledFooter>
    </main>
  )
}

export default Layout
