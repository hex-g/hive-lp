import React from 'react'
import Link from 'next/link'
import {
  Section,
  LoginWrapper,
  Logo,
  Title,
  TextInput,
  Form,
  Label,
  Button,
  Description
} from './LoginSection.style'
import SvgMapping from '../SvgMapping'

const LoginSection = () => {
  return (
    <Section>
      <LoginWrapper>
        <Logo>
          <Link href='/'>
          <a>
            <SvgMapping name='logo' />
          </a>
          </Link>
        </Logo>
        <Title>Entre na <span>Hive</span> da sua instituição!</Title>
        <Form>
          <Label>Dominio</Label>
          <TextInput type='text' />
          <Label>Usuário</Label>
          <TextInput type='text' placeholder='Nome de Usuário' />
          <Label>Senha</Label>
          <TextInput type='password' placeholder='Senha' />
        </Form>
        <Button>Entrar</Button>
        <Description>
            Ainda não possui uma conta? <Link href='/Register/RegisterAccount'> Cadastre-se </Link> agora mesmo! :)
        </Description>
      </LoginWrapper>
    </Section>
  )
}

export default LoginSection
