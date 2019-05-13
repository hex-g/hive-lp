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

const SetUserData = () => {
  const usernameField = document.querySelector('#usernameInput')
  const passwordField = document.querySelector('#passwordInput')

  const username = usernameField.value
  const password = passwordField.value

  const message = document.querySelector('#messageWrapper')

  return {username, password}
}

const LoginSection = (props) => {
  let lock = props.lockFields === 'loading' ? true : false
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
          <TextInput type='text' disabled={lock}/>
          <Label>Usuário</Label>
          <TextInput type='text' placeholder='Nome de Usuário' id="usernameInput" disabled={lock}/>
          <Label>Senha</Label>
          <TextInput type='password' placeholder='Senha' id="passwordInput" disabled={lock}/>
        </Form>
        <Button onClick={ () => props.OnButtonClick(SetUserData()) } >Entrar</Button>
        <Description>Ainda não possui uma conta? <span>Cadastre-se</span> agora mesmo! :)</Description>
      </LoginWrapper>
    </Section>
  )
}

export default LoginSection
