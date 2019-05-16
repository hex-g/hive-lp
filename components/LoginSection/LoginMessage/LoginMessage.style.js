import styled from 'styled-components'

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw
    top: ${ props => props.behavior.show ? '0px' : '-56px' };
    transition .3s ease-in;
    height: auto;
    z-index: 3;
    transition-delay: ${props => props.behavior.type == 'idling' ? '.5s' : '0s'}
`

export const MessageBox = styled.div`
    height: 24px;
    padding: 16px 48px;
    background: ${props => props.behavior.type == 'error' 
        ? props.theme.burntSienna 
        : props.theme.hippieBlue};
    color: ${props => props.theme.wildSand};
    font-family: ${props => props.theme.primaryFont};
    font-size: ${props => props.theme.largeText};
    border-radius: 0 0 7px 7px;
    text-align: center;
    min-width: 500px;
`