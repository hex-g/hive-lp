import React, { Fragment } from 'react'

import { MessageWrapper, MessageBox } from './LoginMessage.style'

const LoginMessage = ({ behavior }) => {
  return (
    <Fragment>
      <MessageWrapper behavior={behavior} id="messageWrapper">
        <MessageBox behavior={behavior}>
          {behavior.message}
        </MessageBox>
      </MessageWrapper>
    </Fragment>
  )
}

export default LoginMessage