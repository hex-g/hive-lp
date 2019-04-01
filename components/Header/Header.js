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
        <Link href='/'>
          <a>
            <SvgMapping name="logo" />
          </a>
        </Link>
      </LogoWrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Link href='/'>
              <a>O que é Hive?</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/'>
              <a>Ferramentas</a>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <NavButtonWrapper>
        <Link href='/'>
          <a>Entrar</a>
        </Link>
        <Pipe></Pipe>
        <Link href='/'>
          <a>Cadastre-se</a>
        </Link>
      </NavButtonWrapper>
    </HeaderHolder>
  )
}

export default Header