import styled from 'styled-components'

export const HeaderHolder = styled.header`
  display: grid;
  grid-template-columns: 10% 60% 30%;
  padding: 20px;
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
`

export const NavItem = styled.li`
  list-style: none;
  padding: 0 40px;
  a {
    text-decoration: none;
    color: ${props => props.theme.outerSpace};
  }
`

export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.hippieBlue};
    text-decoration: none;
    padding: 0 10px;
  }
`

export const Pipe = styled.span`
  height: 20px;
  width: 1px;
  background-color: ${props => props.theme.hippieBlue};
`
