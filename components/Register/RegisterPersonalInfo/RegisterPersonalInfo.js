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
} from './RegisterPersonalInfo.style'
import SvgMapping from '../../SvgMapping'

const RegisterPersonalInfo = () => {
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
            Agora precisamos confirmar alguns dados
          </FlavorText>
          <InputHalfWrapper>
            <div>
              <Label bold>Nome*</Label>
              <TextInput type='text' placeholder='Daniela' onChange={(event) => sessionStorage.setItem('name', event.target.value)} />
            </div>
            <div>
              <Label bold>Sobrenome*</Label>
              <TextInput type='text' placeholder='Santos' onChange={(event) => sessionStorage.setItem('lastName', event.target.value)} />
            </div>
          </InputHalfWrapper>
          <InputHalfWrapper>
            <div>
              <Label bold>Data de nascimento*</Label>
              <TextInput type='text' placeholder='DD/MM/AAAA' onChange={(event) => sessionStorage.setItem('bornDate', event.target.value)} />
            </div>
            <div>
              <Label bold>CPF*</Label>
              <TextInput type='text' onChange={(event) => sessionStorage.setItem('cpf', event.target.value)} />
            </div>
          </InputHalfWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/RegisterAccount'>
              Voltar
            </Link>
          </Button>
          <Button>
            <Link href='/RegisterConfirmation'>
              Próximo
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterPersonalInfo