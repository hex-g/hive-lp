import styled from 'styled-components'

export const FooterHolder = styled.section`
    position: relative;
    width: 100%; 
    overflow: hidden;
`

export const FooterContent = styled.div`
    width: 1000px;
    padding: 20px;
    margin-left: calc(50% - 500px);
    padding-top: 150px;
    padding-bottom: 50px;
`

export const Line = styled.hr`
    max-width: 1000px;
`

export const LogoWrapper = styled.div`
    padding: 40px 0;
`

export const SocialLink = styled.a`
    float: left;
    text-decoration: none;
    padding-right: 50px;
    color: inherit;
`

export const HexagonWrapper = styled.div`
    position: absolute;
    margin-top: -285px;
    float: right;
    z-index: -1;
    right: calc(50% - 850px);
`

export const RegisteredLabel = styled.div`
    float: right;
    color: ${props => props.theme.wildSand};
`