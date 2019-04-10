import React from 'react'
import { Section, TextoPrincipal, TextoPrincipal__Bold , Hexagono } from './FirstSection.style'
import SvgMapping from '../SvgMapping'

const FirstSection = () => {
  return (
    <Section>
      <Hexagono>
          <SvgMapping name="hexagon" />
      </Hexagono>
      <TextoPrincipal>
          Maior
          <TextoPrincipal__Bold> produtividade acadêmica </TextoPrincipal__Bold> 
          para o aluno e para o professor. 
        </TextoPrincipal>
    </Section>
  )
}

export default FirstSection