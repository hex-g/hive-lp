import React from 'react'
import { 
  Section, 
  MainText,
  HexagonWrapper,
  ContentWrapper,
  Button,
  ImageWrapper
} from './FirstSection.style'
import Link from 'next/link'
import SvgMapping from '../SvgMapping'

import Image from './monitor.png'

const FirstSection = () => {
  return (
    <Section id='top'>
      <HexagonWrapper>
        <SvgMapping name="hexagon"/>
      </HexagonWrapper>
      <ContentWrapper>
        <MainText>
          Maior
          <span> produtividade acadêmica </span> 
          para o aluno e para o professor.
        </MainText>
        <Button>
          <Link href='/Register/RegisterAccount'>
            <a>Experimente a Hive</a>
          </Link>
        </Button>
        <ImageWrapper src={Image} />
      </ContentWrapper>
    </Section>
  )
}

export default FirstSection