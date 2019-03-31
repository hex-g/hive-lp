import React from 'react'
import { Section, H1, SquareContainer, Square, ImageOne, ImageTwo, ImageThree, H2, P } from './SecondSection.style'

const SecondSection = () => {
  return (
    <Section>
      <H1>O que é Hive ?</H1>
      <SquareContainer>
        <Square>
          <ImageOne />
          <H2>Personalizável</H2>
          <P>A Hive é facilmente personalizável de forma nativa para atender o contexto da instituição.</P>
        </Square>
        <Square>
          <ImageTwo />
          <H2>Open Source</H2>
          <P>A plataforma tem o código aberto e sugestões são sempre bem-vindas!</P>
        </Square>
        <Square>
          <ImageThree />
          <H2>Gamificação</H2>
          <P>Na Hive os alunos constroem seus perfis de acordo com o desempenho acadêmico.</P>
        </Square>
      </SquareContainer>
      <P>Hive é uma plataforma de <b>gestão acadêmica</b> para alunos e professores. Na ferramenta, o corpo docente disponibiliza e gerencia conteúdos para suas turmas, enquanto os estudantes compartilham suas anotações e interagem no fórum de perguntas. A Hive acredita que <b>aprender é uma constante</b>, por isso disponibilizamos ferramentas de produtividade e elementos de gamificação para facilitar a sinergia dentro da instituição de ensino.</P>
    </Section>
  )
}

export default SecondSection