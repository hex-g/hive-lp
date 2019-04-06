import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.wildSand};
  margin-top: 100px;
`

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`

export const NavigationTitle = styled.h2`
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.smallTitle};
`

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 40px;
`

export const NavigationItem = styled.li`
  list-style: none;
  padding: 0 10px;
`

export const Pipe = styled.span`
  height: 20px;
  width: 1px;
  background-color: ${props => props.theme.outerSpace};
`

export const ShowCase = styled.ul`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 500px;
`

export const ShowCaseItem = styled.li`
  display: block;
  position: relative;
  width: 1200px;
`

export const ImageContainer = styled.div`
  position: absolute;
  left: 10%;
`

export const ImageHive = styled.img`
  width: 50%;
`

export const ShowCaseDescription = styled.div`
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
`

export const LineWrapper = styled.div`
  position: absolute;
  top: ${props => props.up ? '-170px' : '-30px'};
  left: 30px;
`

export const LineHorizontal = styled.span`
  position: absolute;
  top: ${props => props.up ? '-12px' : '62px'};
  left: -13px;
  display: inline-block;
  height: 3px;
  width: 100px;
  background-color: ${props => props.theme.rajah};
`

export const LineVertical = styled.span`
  position: absolute;
  top: ${props => props.up ? '-37px' : '37px'};
  left: 85px;
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: ${props => props.theme.rajah};
`

export const LineDiagonal = styled.span`
  position: absolute;
  top: ${props => props.up ? '0' : '51px'};
  left: -60px;
  display: inline-block;
  height: 2px;
  width: 50px;
  transform: ${props => props.up ? 'rotate(-28deg)' : 'rotate(27deg)'};
  background-color: ${props => props.theme.rajah};
`

export const Description = styled.p`
  position: absolute;
  top: ${props => props.up ? '-200px' : '15px'};
  left: 135px;
`