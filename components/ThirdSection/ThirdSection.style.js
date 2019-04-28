import styled, { css } from 'styled-components'

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
  button {
    background: none;
    border: none;
    font-size: ${props => props.theme.mediumText};
    font-weight: ${props => props.show ? 'bold' : 'lighter'};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.hoverOuterSpace};
    }
  }
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
  transition: opacity 0.5s linear, transform 0.5s linear;
  opacity: 1;
  transform: translateX(0);
  position: absolute;
  width: 1200px;
  height: 355px;

  ${props => !props.show && css`
    opacity: 0;
    transform: translateX(20%);
  `}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
  align-items: center;
  position: absolute;
  left: ${props => props.right ? '-25%' : '10%'};
`

export const ImageHive = styled.img`
  width: ${props => props.right ? '40%' : '50%'};
  border: 3px solid white;
`

export const ShowCaseDescription = styled.div`
  position: absolute;
  margin-top: 75px;
  width: 400px;
  top: 50%;
  left: 50%;
`

export const LineWrapper = styled.div`
  position: absolute;
  top: ${props => props.up ? '-170px' : '-30px'};
  left: ${props => props.right ? '-65px' : '30px'};
  transform: ${props => props.right ? 'scale(-1, 1)' : 'unset'};
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
  left: ${props => props.right ? '-445px' : '135px'};
  width: ${props => props.right ? '270px' : 'auto'};
  text-align: ${props => props.right ? 'right' : 'left'};
`