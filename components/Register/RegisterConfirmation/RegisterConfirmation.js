import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { saveUser } from '../../../pages/Register/Register.service'
import Message from '../../Message'
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

    try {
      const response = await saveUser(result)
      response && response.status === 200 &&
      setBehavior({
        show: true,
        type: 'success',
        message: 'Seu cadastro foi realizado com sucesso!'
      })
      setTimeout(function() {
        window.location.href = "/"
      }, 3000)
    } catch(e) {
      setBehavior({
        show: true,
        type: 'error',
        message: 'Ops! Tivemos um erro inesperado. Estamos trabalhando nisso! :)'
      })
    }
  }

  const hidePassword = () => {
    let length = result.password && result.password.length
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += '•'
    }
    return newPassword
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
        <Message behavior={behavior}/>
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
                    <Values>{result.birthDate}</Values>
                  </div>
                </ValuesItem>
                <ValuesItem>
                  <div>
                    <ValuesLabel>Senha</ValuesLabel>
                    <Values>{hidePassword()}</Values>
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
              <a>
                Voltar
              </a>
            </Link>
          </Button>
          <Button onClick={() => handleRegister()}>
            <Link href=''>
              <a>
                Finalizar
              </a>
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterConfirmation