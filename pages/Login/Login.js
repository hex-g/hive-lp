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
          message: 'Ops... Parece que você não preencheu todos os campos'
        }
      )
      return
    }
    setBehavior(
      {
        show: true,
        type: 'loading',
        message: 'Só um minutinho, estamos processando...'
      }
    )
    try{
      const response = await getAccessToken(username, password)
      
      response && response.headers && response.headers.authorization && localStorage.setItem('hive_access_token', response.headers.authorization)
      setBehavior(
        {
          show: false,
          type: 'idling',
          message: ''
        }
      )
    }
    catch(e){
      setBehavior(
        {
          show: true,
          type: 'error',
          message: 'Eita... algo deu errado. Você tem certeza que digitou tudo certinho?'
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