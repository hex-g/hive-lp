import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.div`
  position: relative;
  top: 40px;
  tspan {
    font-family: ${props => props.theme.primaryFont}, sans-serif;
  }
`

export const Title = styled.h2`
  font-family: ${props => props.theme.primaryFont}, sans-serif;
  font-size: ${props => props.theme.smallTitle};
  margin-top: 24px;
  span{
    font-weight: bold;
    color: ${props => props.theme.rajah};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
`

export const Label = styled.p`
  padding-left: 5px;
  margin-top: 20px;
  line-height: 1.3em;
  font-family: ${props => props.theme.secondaryFont}, sans-serif;
  font-size: ${props => props.theme.mediumText};
  font-weight: bold;
`

export const TextInput = styled.input`
  text-align: left;
  width: calc(100% - 20px);
  font-size: 18px;
  margin-top: 10px;
  height: 30px;
  padding: 10px 10px;
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
export const Description = styled.p`
  text-align: center;
  line-height: 1.3em;
  font-family: ${props => props.theme.secondaryFont}, sans-serif;
  font-size: ${props => props.theme.mediumText};
  a {
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.rajah};
    text-decoration: none
  }
`