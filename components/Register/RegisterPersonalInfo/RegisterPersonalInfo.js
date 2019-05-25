import React, { useState } from 'react'
import Link from 'next/link'
import MaskedInput from 'react-text-mask'
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
              <MaskedInput
                onChange={(event) => sessionStorage.setItem('birthDate', event.target.value)}
                type='text'
                placeholder='DD/MM/AAAA'
                guide={false}
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                render={(ref, props) => (
                  <TextInput ref={ref} {...props} />
                )}
              />
            </div>
            <div>
              <Label bold>CPF*</Label>
              <MaskedInput
                onChange={(event) => sessionStorage.setItem('cpf', event.target.value)}
                type='text'
                guide={false}
                mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/]}
                render={(ref, props) => (
                  <TextInput ref={ref} {...props} />
                )}
              />
            </div>
          </InputHalfWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/Register/RegisterAccount'>
              Voltar
            </Link>
          </Button>
          <Button>
            <Link href='/Register/RegisterConfirmation'>
              Próximo
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterPersonalInfo