import styled from 'styled-components'

export const Section = styled.section`
  min-height: 570px;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.athensGray};
  display: flex;
  justify-content: center;
`

export const MainText = styled.div `
  width: 350px;
  font-family: ${props => props.theme.secondaryFont};
  font-size: 18px;
  color: #ffffff;
  margin-left: 0px;
  border-left: 2px solid ${props => props.theme.rajah};
  padding-left: 24px;
  line-height: 30px;
  margin-top: 32px;
  max-width: 65%;

  
  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 900px) {
    margin-top: 100px;
    padding-left: 10px;
  }

  span{
    font-weight: bold;
  }
`

export const HexagonWrapper = styled.div`
  position: absolute;
  top:-150px;
  left: 0;
  height: 1000px;
  width: 100%;
  z-index: -1;
`

export const ContentWrapper = styled.div`
  position: absolute;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  @media (min-width: 900px) {
    transform: translate(-50%, 0);
    display: block;
    top: 200px;
    left: 50%;  
    min-width: 900px;
    max-width: 900px;
  }
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
  color: ${props => props.theme.rajah};
  transition: 0.2s ease-in;
  margin: 32px 0;
  cursor: pointer;

  
  @media (min-width: 900px) {
    margin: 60px 20px;
  }

  &:hover {
    background-color: ${props => props.theme.rajah};
    color: ${props => props.theme.wildSand};
    transition: 0.2s ease-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`

export const ImageWrapper = styled.img`
  position: relative;
  width: 400px;
  max-width: 75%;

  @media (min-width: 900px) {
    position: absolute;
    margin-right: -40px;
    width: 600px;
    top: 0;
    height: 300px;
    float: right;
    right: 0;
  }
`