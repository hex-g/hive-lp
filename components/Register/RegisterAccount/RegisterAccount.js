import React, { useState } from 'react'
import Link from 'next/link'
import {
  Section,
  Sidebar,
  Logo,
  Steps,
  StepsList,
  FirstStepItem,
  StepItem,
  LastStepItem,
  ImageWrapper,
  FormWrapper,
  Form,
  ButtonWrapper,
  FlavorText,
  Label,
  InputWrapper,
  InputHalfWrapper,
  TextInput,
  BigTextInput,
  PasswordWrapper,
  PasswordItem,
  Button
} from './RegisterAccount.style'
import SvgMapping from '../../SvgMapping'

const RegisterAccount = () => {

  const [passwordValue, setPasswordValue] = useState('')
  const [colorMinLength, setColorMinLength] = useState(false)
  const [colorLowerCase, setColorLowerCase] = useState(false)
  const [colorUpperCase, setColorUpperCase] = useState(false)
  const [colorNumber, setColorNumber] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [confirmed, setConfirmed] = useState(false)

  const lowerCase = /[a-z]/
  const upperCase = /[A-Z]/
  const number = /[0-9]/

  const hasMinLength = (value, minLength) => value.length > minLength
  const hasLowerCase = (value) => lowerCase.test(value)
  const hasUpperCase = (value) => upperCase.test(value)
  const hasNumber = (value) => number.test(value)

  const checkPassword = (event) => {
    const value = event.target.value
    setPasswordValue(value)
    const submitButton = document.getElementById('submitButton')

    setColorMinLength(hasMinLength(value, 6)) 
    setColorUpperCase(hasUpperCase(value))
    setColorLowerCase(hasLowerCase(value))
    setColorNumber(hasNumber(value))

    const isEnabled = () =>
      hasMinLength(value, 6) && 
      hasUpperCase(value) &&
      hasLowerCase(value) &&
      hasNumber(value)

    isEnabled() ? setConfirmed(true) : setConfirmed(false)
    
  }

  const checkConfirmation = (event) =>
    confirmed &&
    event.target.value === sessionStorage.getItem('password') ?
    setDisableSubmit(false) :
    setDisableSubmit(true)

  const redirect = () => window.location.href = "/RegisterPersonalInfo"

  return (
    <Section>
      <Sidebar>
        <Logo>
          <Link href='/'>
            <a>
              <SvgMapping name='logo' />
            </a>
          </Link>
        </Logo>
        <Steps>
          <StepsList>
            <FirstStepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='registerHexagonGroup' />
                </a>
              </Link>
            </FirstStepItem>
            <StepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup' />
                </a>
              </Link>
            </StepItem>
            <LastStepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroupConfirmation' />
                </a>
              </Link>
            </LastStepItem>
          </StepsList>
        </Steps>
        <ImageWrapper>
          <SvgMapping name='gamification' />
        </ImageWrapper>
      </Sidebar>
      <FormWrapper>
        <Form>
          <FlavorText>
            Primeiro vamos criar seu acesso na Hive! :)
          </FlavorText>
          <InputHalfWrapper>
            <div>
              <Label bold>Usuário*</Label>
              <TextInput type='text' placeholder='Nome de Usuário' onChange={(event) => sessionStorage.setItem('username', event.target.value)} />
            </div>
            <div>
              <Label bold>Email*</Label>
              <TextInput type='text' placeholder='usuario@exemplo.com' onChange={(event) => sessionStorage.setItem('email', event.target.value)} />
            </div>
          </InputHalfWrapper>
          <InputWrapper>
            <Label bold>Nome da instituição de ensino*</Label>
            <BigTextInput type='text' placeholder='BandTec - Faculdade de Tecnologia Bandeirantes' onChange={(event) => sessionStorage.setItem('college', event.target.value)} />
          </InputWrapper>
          <InputHalfWrapper>
            <div>
              <Label bold>Senha*</Label>
              <TextInput
                type='password'
                onChange={(event) => {
                checkPassword(event)
                sessionStorage.setItem('password', event.target.value)
                }}
              />
            </div>
            <div>
              <Label bold>Confirmação de senha*</Label>
              <TextInput
                type='password'
                onChange={(event) => {
                  checkConfirmation(event)
                }}
              />
            </div>
          </InputHalfWrapper>
          <InputHalfWrapper>
            <div>
              <Label bold>Sua senha deve conter ao menos:</Label>
              <PasswordWrapper>
                <div>
                  <PasswordItem color={colorMinLength}>6 caracteres</PasswordItem>
                  <PasswordItem color={colorNumber}>1 número</PasswordItem>
                </div>
                <div>
                  <PasswordItem color={colorUpperCase}>1 letra maiúscula</PasswordItem>
                  <PasswordItem color={colorLowerCase}>1 letra minúscula</PasswordItem>
                </div>
              </PasswordWrapper>
            </div>
          </InputHalfWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/'>
              <a>
                Cancelar
              </a>
            </Link>
          </Button>
          <Button
            onClick={() => redirect()}
            disabled={disableSubmit}
          >
            Próximo
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterAccount