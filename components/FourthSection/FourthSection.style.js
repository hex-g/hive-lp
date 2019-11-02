import styled from 'styled-components'

export const Section = styled.section`
  width: calc(100vw - 20px);
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const Description = styled.p`
  text-align: center;
  width: 360px;
  font-size: 18px;
  margin: 50px 0 0 0;
`

export const Container = styled.div`
  text-align: center;
  width: 700px;
  font-size: 18px;
  margin: 50px 0 50px 0;
`

export const TextInput = styled.input`
  text-align: left;
  width: 450px;
  font-size: 18px;
  margin: 20px;
  height: 30px;
  padding: 10px;
  border-radius: 7px;
  outline: none;
  border: none;
  box-shadow: ${props => props.theme.inputBoxShadow};
  &::placeholder {
    color: ${props => props.theme.placeholderOuterSpace};
    font-size: ${props => props.theme.mediumText};
  }
`

export const Button = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 7px;
  box-shadow: ${props => props.theme.buttonBoxShadow};
  text-align: center;
  font-size: ${props => props.theme.mediumText};
  margin: 20px;
  background: ${props => props.theme.hippieBlue};
  color: ${props => props.theme.wildSand};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
`