import styled from 'styled-components'

export const Section = styled.section`
  min-height: auto;
  height: auto;
  background-color: ${props => props.theme.athensGray};
`

export const MainText = styled.div `
  width: 350px;
  font-family: ${props => props.theme.secondaryFont};
  font-size: 24px;
  color: #ffffff;
  margin-left: 0px;
  margin-top: 100px;
  border-left: 2px solid ${props => props.theme.rajah};
  padding-left: 10px;
  line-height: 30px;

  span{
    font-weight: bold;
  }
`

export const HexagonWrapper = styled.div`
  position: relative;
  margin-top: -150px;
  z-index: -1;
  padding: 0;
  margin-left: calc(50% - 900px);
`

export const ContentWrapper = styled.div`
  position: absolute;
  min-width: 900px;
  max-width: 900px;
  margin: auto;
  top: 200px;
  left: 50%;
  transform: translate(-50%, 0);
`

export const Button = styled.button`
  width: 230px;
  height: 50px;
  border: none;
  border-radius: 7px;
  box-shadow: ${props => props.theme.buttonBoxShadow};
  background-color: ${props => props.theme.wildSand};
  font-family: ${props => props.theme.primaryFont};
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.hippieBlue};
  margin: 60px 20px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme.hippieBlue};
    color: ${props => props.theme.wildSand};
  }

  a{
    color: inherit
    text-decoration: none
  }
`

export const ImageWrapper = styled.img`
  width: 600px;
  height: 300px;
  float: right;
  position: absolute;
  padding: 0 80px;
  top: 0;
`