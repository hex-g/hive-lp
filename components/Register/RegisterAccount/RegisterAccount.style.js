import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

export const Sidebar = styled.aside`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  background-color: ${props => props.theme.hippieBlue};
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  text {
    fill: ${props => props.theme.wildSand};
    
    tspan {
      font-family: ${props => props.theme.primaryFont}, sans-serif;
    }
  }
`

export const Steps = styled.div`
  display: flex;
  justify-content: center;
`

export const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  tspan {
    font-family: ${props => props.theme.secondaryFont}, sans-serif;
  }
`

export const StepItem = styled.div`
  padding: 24px 0;
  position: relative;

  &::after {
    display: block;
    position: absolute;
    left: 14px;
    content: '';
    width: 2px;
    height: 49px;
    background-color: ${props => props.theme.rajah};
  }

  g {
    fill: ${props => props.fill ? '#F6BD60' : 'none'};
  }
`
export const FirstStepItem = styled(StepItem)`
  g {
    fill: ${props => props.theme.rajah};
  }
`

export const LastStepItem = styled(StepItem)`
  &:after {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  padding-top: 32px;
  background-color: ${props => props.theme.wildSand};
`

export const FlavorText = styled.h2`
  font-size: ${props => props.theme.smallTitle};
  font-weight: bold;
  text-align: center;
`

export const Form = styled.form`
  padding: 0 80px;
`

export const Label = styled.label`
  display: block;
  font-weight: ${props => props.bold ? 'bold' : 'unset'};
`

export const TextInput = styled.input`
  text-align: left;
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

export const ButtonWrapper = styled.div`
  background-color: white;
`