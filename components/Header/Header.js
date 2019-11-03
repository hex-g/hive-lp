import React from 'react'
import Link from 'next/link'
import {
  HeaderWrapper,
  HeaderHolder,
  LogoWrapper,
  Nav,
  NavList,
  NavItem,
  NavButtonWrapper,
  NavButton,
  Pipe
} from './Header.style'
import SvgMapping from '../SvgMapping'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderHolder>
        <LogoWrapper>
          <Link href='#top'>
            <a>
              <SvgMapping name="logo" />
            </a>
          </Link>
        </LogoWrapper>
        <Nav>
          <NavList>
            <NavItem>
              <Link href='#about'>
                <a>O que é a Hive?</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='#tools'>
                <a>Ferramentas</a>
              </Link>
            </NavItem>
          </NavList>
        </Nav>
        <NavButtonWrapper>
          <Link href='https://hive-app.netlify.com'>
            <a>Entrar</a>
          </Link>
          <Pipe></Pipe>
          <Link href='/RegisterAccount'>
            <a>Cadastre-se</a>
          </Link>
        </NavButtonWrapper>
      </HeaderHolder>
    </HeaderWrapper>
  )
}

export default Header