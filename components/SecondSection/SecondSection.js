import React from 'react'
import { Section, Title, SquareContainer, Square, ImageOne, ImageTwo, ImageThree, Subtitle, Description } from './SecondSection.style'

const SecondSection = () => {
  return (
    <Section>
      <Title>O que é Hive ?</Title>
      <SquareContainer>
        <Square>
          <ImageOne />
          <Subtitle>Personalizável</Subtitle>
          <Description>A Hive é facilmente personalizável de forma nativa para atender o contexto da instituição.</Description>
        </Square>
        <Square>
          <ImageTwo />
          <Subtitle>Open Source</Subtitle>
          <Description>A plataforma tem o código aberto e sugestões são sempre bem-vindas!</Description>
        </Square>
        <Square>
          <ImageThree />
          <Subtitle>Gamificação</Subtitle>
          <Description>Na Hive os alunos constroem seus perfis de acordo com o desempenho acadêmico.</Description>
        </Square>
      </SquareContainer>
      <Description>Hive é uma plataforma de <b>gestão acadêmica</b> para alunos e professores. Na ferramenta, o corpo docente disponibiliza e gerencia conteúdos para suas turmas, enquanto os estudantes compartilham suas anotações e interagem no fórum de perguntas. A Hive acredita que <b>aprender é uma constante</b>, por isso disponibilizamos ferramentas de produtividade e elementos de gamificação para facilitar a sinergia dentro da instituição de ensino.</Description>
    </Section>
  )
}

export default SecondSection