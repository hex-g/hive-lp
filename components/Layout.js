import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { lighten } from 'polished'
import Header from './Header'

export const theme = {
  rajah: '#F6BD60',
  burntSienna: '#E9724C',
  wildSand: '#F5F4F4',
  hippieBlue: '#5C9EAD',
  hoverHippieBlue: lighten(0.2, '#5C9EAD'),
  outerSpace: '#313638',
  hoverOuterSpace: lighten(0.4, '#313638'),
  primaryFont: 'Open Sans',
  cardBoxShadow: '6px 8px 20px 0 rgba(0, 0, 0, 0.08)',
  buttonBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.2)',
  inputBoxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.07)'
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    font-family: ${props => props.theme.primaryFont}, sans-serif;
    color: ${props => props.theme.outerSpace};
    background-color: ${props => props.theme.wildSand};
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