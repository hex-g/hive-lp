import React from 'react'
import Link from 'next/link'
import { 
  Section, 
  MainText,
  HexagonWrapper,
  ContentWrapper,
  Button,
  ImageWrapper
} from './FirstSection.style'
import SvgMapping from '../SvgMapping'
import BackHexagon from '../BackHexagon'

import Image from './monitor.png'

const FirstSection = () => {
  return (
    <Section id='top'>
      <HexagonWrapper>
        <BackHexagon side="left" show="third" transparent={false}/>
      </HexagonWrapper>
      <ContentWrapper>
        
        <ImageWrapper src={Image} />
        <MainText>
          Maior
          <span> produtividade acadêmica </span> 
          para o aluno e para o professor.
        </MainText>
        <Button>
          <Link href='/RegisterAccount'>
            <a>Experimente a Hive</a>
          </Link>
        </Button>
      </ContentWrapper>
    </Section>
  )
}

export default FirstSection