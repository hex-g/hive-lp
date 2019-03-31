import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import Header from './Header'

export const theme = {
  rajah: '#F6BD60',
  burntSienna: '#E9724C',
  athensGray: '#E8E9EB',
  hippieBlue: '#5C9EAD',
  hoverHippieBlue: lighten(0.2, '#5C9EAD'),
  outerSpace: '#313638',
  hoverOuterSpace: lighten(0.4, '#313638'),
  primaryFont: 'sans-serif',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.primaryFont};
    color: ${props => props.theme.outerSpace};
    background-color: ${props => props.theme.lightgrey};
  }

  ul {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
          <Header />
          {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout;