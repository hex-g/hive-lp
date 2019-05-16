import React from 'react'

import { MessageWrapper, MessageBox } from './LoginMessage.style'

const LoginMessage = ({ behavior }) => {
    return (  
        <>  
            <MessageWrapper behavior={behavior} id="messageWrapper">
                <MessageBox behavior={behavior}>
                    {behavior.message}
                </MessageBox>
            </MessageWrapper>
        </>
    );
}

export default LoginMessage