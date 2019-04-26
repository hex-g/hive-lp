import SvgMapping from '../SvgMapping/SvgMapping'
import Link from 'next/link'

import {
    FooterHolder,
    FooterContent,
    Line,
    LogoWrapper,
    SocialLink,
    HexagonWrapper,
    RegisteredLabel
}from './Footer.style'

const Footer = () =>(
    <FooterHolder>
        <FooterContent>
            <Line />
            <LogoWrapper>
                <SvgMapping name='logo' />
            </LogoWrapper>
            <Link>
                <SocialLink href='https://github.com/hex-g'>
                    Github
                </SocialLink>
            </Link>
            <Link>
                <SocialLink href='https://twitter.com'>
                    Twitter
                </SocialLink>
            </Link>
            <RegisteredLabel>
                ® Hex Group 2019
            </RegisteredLabel>
        </FooterContent>
        <HexagonWrapper>
            <SvgMapping name='hexagon' scale='.6'/>
        </HexagonWrapper>
    </FooterHolder>
)

export default Footer;