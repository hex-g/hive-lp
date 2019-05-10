import React, { useState } from 'react'
import Layout from '../../components/Layout'
import LoginSection from '../../components/LoginSection'
import { getAccessToken } from './Login.service'



const Login = () => {
  
  const handleGetUserTokenClick = async (username, password) => {
    try{
      const response = await getAccessToken(username, password)
      response && response.headers && response.headers.authorization && localStorage.setItem('hive_access_token', response.headers.authorization)
    }
    catch(e){
      alert("Tá errado seu imbecil")
    }
  }

  return (
    <Layout>
      <LoginSection OnButtonClick = {(userdata) => handleGetUserTokenClick(userdata.username, userdata.password) }/>
    </Layout>
  )
}

export default Login