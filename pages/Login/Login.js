import React, { useState } from 'react'
import Layout from '../../components/Layout'
import LoginSection from '../../components/LoginSection'
import { getAccessToken } from './Login.service'
import LoginMessage from '../../components/LoginSection/LoginMessage'



const Login = () => {
  
  const [behavior, setBehavior] = useState({
    show: false,
    type: 'idling',
    message: ''
  })

  const handleGetUserTokenClick = async (username, password) => {
    if(!username || !password){
      setBehavior(
        {
          show: true,
          type: 'error',
          message: 'Preeencha todos os campos menos o domínio pq ele é inútil'
        }
      )
      return
    }
    setBehavior(
      {
        show: true,
        type: 'loading',
        message: 'Carregando...mas vai dar erro pq o hirumito não tá aqui'
      }
    )
    try{
      const response = await getAccessToken(username, password)
      
      response && response.headers && response.headers.authorization && localStorage.setItem('hive_access_token', response.headers.authorization)
      setBehavior(
        {
          show: false,
          type: 'idling',
          message: 'Sucesso!!!'
        }
      )
    }
    catch(e){
      setBehavior(
        {
          show: true,
          type: 'error',
          message: 'Você errou... o login é "admin" e a Senha é "admin"'
        }
      )
    }
  }

  return (
    <Layout>
      <LoginMessage behavior={behavior}/>
      <LoginSection lockFields = {behavior.type} OnButtonClick = {(userdata) => handleGetUserTokenClick(userdata.username, userdata.password) }/>
    </Layout>
  )
}

export default Login