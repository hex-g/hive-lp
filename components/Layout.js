import React, { Fragment } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './Header/Header'

export const theme = {
  primaryFont: 'sans-serif',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.primaryFont};
    background-color: ${props => props.theme.lightgrey};
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