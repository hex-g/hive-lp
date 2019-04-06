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

export const LineWrapperUp = styled.div`
  position: absolute;
  top: -170px;
  left: 30px;
`

export const LineWrapperDown = styled.div`
  position: absolute;
  top: -30px;
  left: 30px;
`

export const LineHorizontalUp = styled.span`
  position: absolute;
  top: -12px;
  left: -13px;
  display: inline-block;
  height: 3px;
  width: 100px;
  background-color: ${props => props.theme.rajah};
`

export const LineHorizontalDown = styled.span`
  position: absolute;
  top: 62px;
  left: -13px;
  display: inline-block;
  height: 3px;
  width: 100px;
  background-color: ${props => props.theme.rajah};
`

export const LineVerticalUp = styled.span`
  position: absolute;
  top: -37px;
  left: 85px;
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: ${props => props.theme.rajah};
`

export const LineVerticalDown = styled.span`
  position: absolute;
  top: 37px;
  left: 85px;
  display: inline-block;
  width: 2px;
  height: 50px;
  background-color: ${props => props.theme.rajah};
`

export const LineDiagonalUp = styled.span`
  position: absolute;
  top: 0;
  left: -60px;
  display: inline-block;
  height: 2px;
  width: 50px;
  transform: rotate(-28deg);
  background-color: ${props => props.theme.rajah};
`

export const LineDiagonalDown = styled.span`
  position: absolute;
  top: 51px;
  left: -60px;
  display: inline-block;
  height: 2px;
  width: 50px;
  transform: rotate(28deg);
  background-color: ${props => props.theme.rajah};
`

export const DescriptionUp = styled.p`
  position: absolute;
  top: -200px;
  left: 135px;
`

export const DescriptionDown = styled.p`
  position: absolute;
  top: 15px;
  left: 135px;
`