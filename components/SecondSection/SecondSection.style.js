import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.wildSand};
`

export const Title = styled.h2`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.theme.smallTitle};
  margin-bottom: 60px;
`

export const SquareContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 60px;
`

export const Square = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 15px 0 15px;
  background-color: white;
  box-shadow: ${props => props.theme.cardBoxShadow};
`

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.mediumText};
  font-weight: bold;
  margin: 24px 0 14px 0;
`

export const SubtitleOpenSource = styled(Subtitle)`
  margin: 32px 0 14px 0;
`

export const SquareDescription = styled.p`
  text-align: center;
  line-height: 1.3em;
  padding: 0 25px;
  font-family: ${props => props.theme.secondaryFont}, sans-serif;
  font-size: ${props => props.theme.mediumText};
`

export const Description = styled.p`
  padding: 0 150px;
  text-align: center;
  line-height: 1.3em;
  font-family: ${props => props.theme.secondaryFont}, sans-serif;
  font-size: ${props => props.theme.mediumText};
  span {
    font-weight: bold;
  }
`