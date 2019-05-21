import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { saveUser } from '../../../pages/Register/Register.service'
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
  Username,
  ValuesWrapper,
  ValuesItem,
  ValuesLabel,
  Values,
  Mugshot,
  Bee
} from './RegisterConfirmation.style'
import SvgMapping from '../../SvgMapping'

const RegisterConfirmation = () => {

  const [result, setResult] = useState({})
  const [behavior, setBehavior] = useState({
    show: false,
    type: 'idling',
    message: ''
  })

  useEffect(() => {
    setResult({
      username: sessionStorage.getItem('username'),
      email: sessionStorage.getItem('email'),
      college: sessionStorage.getItem('college'),
      password: sessionStorage.getItem('password'),
      name: sessionStorage.getItem('name'),
      lastName: sessionStorage.getItem('lastName'),
      birthDate: sessionStorage.getItem('birthDate'),
      cpf: sessionStorage.getItem('cpf')
    })
  }, [])

  const handleRegister = async () => {
    const response = await saveUser(result)
    const status = response && response.status
    switch (status) {
      case 200:
        console.log('Deu certo')
        break;
      case 404:
        console.log('miou')
        break;
      default:
        console.log('Tamo trabalhando nisso aí, fi')
    }
  }

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
              <Mugshot>
                <SvgMapping name='adminLogo' />
                <Username>{`${result.name} ${result.lastName}`}</Username>
                <p>Usuário Administrador</p>
              </Mugshot>
              <ValuesWrapper>
                <ValuesItem single>
                  <div>
                    <ValuesLabel>Nome da instituição de ensino</ValuesLabel>
                    <Values>{result.college}</Values>
                  </div>
                </ValuesItem>
                <ValuesItem>
                  <div>
                    <ValuesLabel>Usuário</ValuesLabel>
                    <Values>{result.username}</Values>
                  </div>
                  <div>
                    <ValuesLabel>Email</ValuesLabel>
                    <Values>{result.email}</Values>
                  </div>
                </ValuesItem>
                <ValuesItem>
                  <div>
                    <ValuesLabel>CPF</ValuesLabel>
                    <Values>{result.cpf}</Values>
                  </div>
                  <div>
                    <ValuesLabel>Data de nascimento</ValuesLabel>
                    <Values>{result.bornDate}</Values>
                  </div>
                </ValuesItem>
                <ValuesItem>
                  <div>
                    <ValuesLabel>Senha</ValuesLabel>
                    <Values>{result.password}</Values>
                  </div>
                </ValuesItem> 
                <Bee>&#128029;</Bee>            
              </ValuesWrapper>
            </ConfirmationItem>
          </ConfirmationWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/Register/RegisterPersonalInfo'>
              Voltar
            </Link>
          </Button>
          <Button onClick={() => handleRegister()}>
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