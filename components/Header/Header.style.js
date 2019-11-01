import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  z-index: 5;
`

export const HeaderHolder = styled.div`
  width: 1440px;
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
  tspan {
    font-family: ${props => props.theme.primaryFont}, sans-serif;
  }
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
  font-weight: normal;

  &:first-child  {
    a {
      color: #fff;
      &:hover {
        color: ${props => props.theme.rajah};
      }
    }
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.outerSpace};
    transition: 0.2s ease-out;
    cursor: pointer;

    &:hover {
      transition: 0.2s ease-in;
      color: ${props => props.theme.rajah};
    }
  }
`

export const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
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
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-in;
    background-color: ${props => props.theme.hoverHippieBlue};
  }
`
