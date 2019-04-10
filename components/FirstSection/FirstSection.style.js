import styled from 'styled-components'

export const Section = styled.section`
  height: calc(100vh - 81px);
  background-color: ${props => props.theme.athensGray};
`

export const TextoPrincipal = styled.div `
  width: 447px;
  font-family: ${props => props.theme.secondaryFont};
  font-size: 24px;
  color: #ffffff;
`

export const TextoPrincipal__Bold = styled.span`
  font-weight: bold;
`

export const Hexagono = styled.div`
  position: absolute;
  left: -300px;
  z-index: -1;
`
