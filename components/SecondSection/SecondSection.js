import React from 'react'
import { Section, Title, SquareContainer, Square, ImageOne, ImageTwo, ImageThree, TitleSquare, Text } from './SecondSection.style'

const SecondSection = () => {
  return (
    <Section>
      <Title>O que é Hive ?</Title>
      <SquareContainer>
        <Square>
          <ImageOne />
          <TitleSquare>Personalizável</TitleSquare>
          <Text>A Hive é facilmente personalizável de forma nativa para atender o contexto da instituição.</Text>
        </Square>
        <Square>
          <ImageTwo />
          <TitleSquare>Open Source</TitleSquare>
          <Text>A plataforma tem o código aberto e sugestões são sempre bem-vindas!</Text>
        </Square>
        <Square>
          <ImageThree />
          <TitleSquare>Gamificação</TitleSquare>
          <Text>Na Hive os alunos constroem seus perfis de acordo com o desempenho acadêmico.</Text>
        </Square>
      </SquareContainer>
      <Text>Hive é uma plataforma de <b>gestão acadêmica</b> para alunos e professores. Na ferramenta, o corpo docente disponibiliza e gerencia conteúdos para suas turmas, enquanto os estudantes compartilham suas anotações e interagem no fórum de perguntas. A Hive acredita que <b>aprender é uma constante</b>, por isso disponibilizamos ferramentas de produtividade e elementos de gamificação para facilitar a sinergia dentro da instituição de ensino.</Text>
    </Section>
  )
}

export default SecondSection