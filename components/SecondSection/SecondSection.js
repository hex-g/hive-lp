import React from 'react'
import {
  Section,
  Title,
  SquareContainer,
  Square,
  SquareDescription,
  Subtitle,
  SubtitleOpenSource,
  Description
} from './SecondSection.style'
import SvgMapping from '../SvgMapping'

const SecondSection = () => {
  return (
    <Section>
      <Title>O que é a Hive ?</Title>
      <SquareContainer>
        <Square>
          <SvgMapping name="customizable" />
          <Subtitle>Personalizável</Subtitle>
          <SquareDescription>A Hive é facilmente personalizável de forma nativa para atender o contexto da instituição.</SquareDescription>
        </Square>
        <Square>
        <SvgMapping name="openSource" />
          <SubtitleOpenSource>Open Source</SubtitleOpenSource>
          <SquareDescription>A plataforma tem o código aberto e incentivamos sugestões e construções colaborativas.</SquareDescription>
        </Square>
        <Square>
          <SvgMapping name="gamification" />
          <Subtitle>Gamificação</Subtitle>
          <SquareDescription>Na Hive os alunos constroem seus perfis de acordo com o desempenho acadêmico.</SquareDescription>
        </Square>
      </SquareContainer>
      <Description>Hive é uma plataforma de <span>gestão acadêmica</span> para alunos e professores. Na ferramenta, o corpo docente disponibiliza e gerencia conteúdos para suas turmas, enquanto os estudantes compartilham suas anotações e interagem no fórum de perguntas. A Hive acredita que <span>aprender é uma constante</span>, por isso disponibilizamos ferramentas de produtividade e elementos de gamificação para facilitar a sinergia dentro da instituição de ensino.</Description>
    </Section>
  )
}

export default SecondSection