import React from 'react'
import Link from 'next/link'
import {
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
              <a>O que é Hive?</a>
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
        <Link href='/Login'>
          <a>Entrar</a>
        </Link>
        <Pipe></Pipe>
        <Link href='/RegisterAccount'>
          <a>Cadastre-se</a>
        </Link>
      </NavButtonWrapper>
    </HeaderHolder>
  )
}

export default Header