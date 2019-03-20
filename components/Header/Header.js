import React from 'react'
import Link from 'next/link'
import { HeaderWrapper, HeaderNav, HeaderList, HeaderItem } from './Header.style'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderList>
          <HeaderItem>
            <Link href="/">
              <a>Sessão 1</a>
            </Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/">
              <a>Sessão 2</a>
            </Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/">
              <a>Sessão 3</a>
            </Link>
          </HeaderItem>
          <HeaderItem>
            <Link href="/">
              <a>Sessão 4</a>
            </Link>
          </HeaderItem>
        </HeaderList>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header