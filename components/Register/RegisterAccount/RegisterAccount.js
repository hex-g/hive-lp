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
                  <SvgMapping name='unfillRegisterHexagonGroup'/>
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
              <TextInput type='password' onChange={(event) => sessionStorage.setItem('password', event.target.value)} />
            </div>
            <div>
              <Label bold>Confirmação de senha*</Label>
              <TextInput type='password' />
            </div>
          </InputHalfWrapper>
          <InputHalfWrapper>
            <div>
              <Label bold>Sua senha deve conter ao menos:</Label>
              <PasswordWrapper>
                <div>
                  <PasswordItem>6 caracteres</PasswordItem>
                  <PasswordItem>1 número</PasswordItem>
                </div>
                <div>
                  <PasswordItem>1 letra maiúscula</PasswordItem>
                  <PasswordItem>1 letra minúscula</PasswordItem>
                </div>
              </PasswordWrapper>
            </div>
          </InputHalfWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/'>
              Cancelar
            </Link>
          </Button>
          <Button>
            <Link href='/Register/RegisterPersonalInfo'>
              Próximo
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterAccount