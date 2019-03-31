import styled from 'styled-components'

export const HeaderHolder = styled.header`
  display: grid;
  grid-template-columns: 20% 50% 20%;
  padding: 20px;
  font-weight: lighter;
  background-color: ${props => props.theme.athensGray};
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
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
    transition: 0.2s ease-out;
    &:hover {
      transition: 0.2s ease-in;
      color: ${props => props.theme.hoverOuterSpace};
    }
  }
`

export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.hippieBlue};
    text-decoration: none;
    padding: 0 10px;
    transition: 0.2s ease-out;
    &:hover {
      transition: 0.2s ease-in;
      color: ${props => props.theme.hoverHippieBlue};
    }
  }
`

export const Pipe = styled.span`
  height: 20px;
  width: 1px;
  background-color: ${props => props.theme.hippieBlue};
`
