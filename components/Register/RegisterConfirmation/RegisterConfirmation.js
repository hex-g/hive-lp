import React, { useState, useEffect } from 'react'
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
  Button,
  ConfirmationWrapper,
  ConfirmationItem,
  ValuesLabel,
  Values
} from './RegisterConfirmation.style'
import SvgMapping from '../../SvgMapping'

const RegisterConfirmation = () => {

  const [result, setResult] = useState({})

  useEffect(() => {
    setResult({
      username: sessionStorage.getItem('username'),
      email: sessionStorage.getItem('email'),
      college: sessionStorage.getItem('college'),
      password: sessionStorage.getItem('password'),
      name: sessionStorage.getItem('name'),
      lastName: sessionStorage.getItem('lastName'),
      bornDate: sessionStorage.getItem('bornDate'),
      cpf: sessionStorage.getItem('cpf')
    })
  }, [])

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
            <StepItem fill>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup'/>
                </a>
              </Link>
            </StepItem>
            <LastStepItem fill>
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
            Pronto! Confira se está tudo certinho.
          </FlavorText>
          <ConfirmationWrapper>
            <ConfirmationItem>
              <ValuesLabel>Usuário</ValuesLabel>
              <Values>{result.username}</Values>
              <ValuesLabel>Nome da instituição de ensino</ValuesLabel>
              <Values>{result.college}</Values>
              <ValuesLabel>Email</ValuesLabel>
              <Values>{result.email}</Values>
              <ValuesLabel>Senha</ValuesLabel>
              <Values>{result.password}</Values>
              <ValuesLabel>Nome e Sobrenome</ValuesLabel>
              <Values>{`${result.name} ${result.lastName}`}</Values>
              <ValuesLabel>Data de nascimento</ValuesLabel>
              <Values>{result.bornDate}</Values>
              <ValuesLabel>CPF</ValuesLabel>
              <Values>{result.cpf}</Values>
            </ConfirmationItem>
          </ConfirmationWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/RegisterPersonalInfo'>
              Voltar
            </Link>
          </Button>
          <Button>
            <Link href='/'>
              Finalizar
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterConfirmation