import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.main`
`

const StyledHeader = styled.header`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: .5rem;
  background-color: var(--card-color);
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
  margin: 0 auto;
  text-align: center;
`
const Layout = ({children}) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledLogo src="/images/FULL_LOGO_COLOR.png" alt="Learnwell"/>
      </StyledHeader>
      <Outlet />
      <StyledFooter>
        <a href='https://mattumland.dev' target='_blank' >@2024 Matt Umland</a>
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout
