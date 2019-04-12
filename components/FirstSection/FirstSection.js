import React from 'react'
import { Section, TextoPrincipal, TextoPrincipal__Bold , Hexagono, ContentWrapper, Button, ImageWrapper } from './FirstSection.style'
import SvgMapping from '../SvgMapping'

const FirstSection = () => {
  return (
    <Section>
      <Hexagono>
          <SvgMapping name="hexagon" scale="1"/>
      </Hexagono>
      <ContentWrapper>
        <TextoPrincipal>
          Maior
            <TextoPrincipal__Bold> produtividade acadêmica </TextoPrincipal__Bold> 
          para o aluno e para o professor. 
        </TextoPrincipal>
        <Button>Experimente a Hive</Button>
        <ImageWrapper>aaaa</ImageWrapper>
      </ContentWrapper>
    </Section>
  )
}

export default FirstSection