import styled from "styled-components";

const StyledLayout = styled.main`
  min-height: 500px;
`

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
        {children}
      <StyledFooter>
        <a href='https://mattumland.dev' target='_blank' >@2024 Matt Umland</a>
      </StyledFooter>
    </StyledLayout>
  )
}

export default Layout