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
    fill: ${props => props.fill ? props.theme.rajah : 'none'};
  }
`
export const FirstStepItem = styled(StepItem)`
  g {
    fill: ${props => props.theme.rajah};
  }
`

export const LastStepItem = styled(StepItem)`
  g {
    fill: ${props => props.fill ? props.theme.rajah : 'none'};
  }

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
  padding-bottom: 56px;
`

export const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 4fr;
  padding: 0 80px;
`

export const ConfirmationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ConfirmationItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const ValuesLabel = styled.h4`
  font-weight: bold;
  font-size: ${props => props.theme.mediumText};
  padding-bottom: 8px;
`

export const Values = styled.p`
  padding-bottom: 16px;
`

export const ButtonWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding-top: 24px;
`

export const Button = styled.button`
  width: 140px;
  height: 50px;
  border: none;
  border-radius: 7px;
  border: ${props => props.cancel && `1px solid ${props.theme.hippieBlue}`};
  box-shadow: ${props => props.cancel ? 'none' : props.theme.buttonBoxShadow};
  background-color: ${props => props.cancel ? 'white' : props.theme.hippieBlue};
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.mediumText};  
  color: ${props => props.cancel ? props.theme.hippieBlue : props.theme.wildSand};
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    color: ${props => props.cancel ? props.theme.hippieBlue : props.theme.wildSand};
    text-decoration: none;
  }
`