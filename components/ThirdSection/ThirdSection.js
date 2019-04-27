import React, { useState } from 'react'
import {
  Section,
  NavigationBar,
  NavigationTitle,
  NavigationList,
  NavigationItem,
  Pipe,
  ShowCase,
  ShowCaseItem,
  ImageContainer,
  ImageHive,
  ShowCaseDescription,
  Description,
  LineWrapper,
  LineHorizontal,
  LineVertical,
  LineDiagonal,
} from './ThirdSection.style'

import Image from './desktop.png'

const ThirdSection = () => {
  const [show, setShow] = useState({
    nest: true,
    hiveShare: false,
    hiveCentral: false,
    profile: false
  })

  return (
    <Section>
      <NavigationBar>
        <NavigationTitle>Editor sem complicações</NavigationTitle>
        <NavigationList>
          <NavigationItem show={show.nest}>
            <button
              onClick={() =>
                setShow({
                  nest: true,
                  hiveShare: false,
                  hiveCentral: false,
                  profile: false
                })}
            >
              Portal
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.hiveShare}>
            <button 
              onClick={() =>
                setShow({
                  nest: false,
                  hiveShare: true,
                  hiveCentral: false,
                  profile: false
                })}
            >
              HiveShare
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.hiveCentral}>
            <button 
              onClick={() =>
                setShow({
                  nest: false,
                  hiveShare: false,
                  hiveCentral: true,
                  profile: false
                })}
            >
              HiveCentral
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.profile}>
            <button 
              onClick={() =>
                setShow({
                  nest: false,
                  hiveShare: false,
                  hiveCentral: false,
                  profile: true
                })}
            >
              Perfil
            </button>
          </NavigationItem>
        </NavigationList>
      </NavigationBar>
      <ShowCase>
        <ShowCaseItem show={show.nest}>
          <ImageContainer>
            <ImageHive src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>Agrega todas as ferramentas e avisos da instituição de ensino</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Mantém o aluno e o professor em alerta sobre materiais compartilhados</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.hiveShare}>
          <ImageContainer right>
            <ImageHive right src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up right>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up right>Compartilhamento de informações entre alunos e professores</Description>
            <LineWrapper right>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description right>Assuntos separados por tags personalizáveis</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.hiveCentral}>
          <ImageContainer>
            <ImageHive src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>Suporte completo ao Markdown com separação de blocos de anotações</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.profile}>
          <ImageContainer right>
            <ImageHive right src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper right up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description right up>Gamificação de bordas personalizáveis e emblemas desbloqueáveis</Description>
            <LineWrapper right>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description right>Showcase de materiais compartilhados e elementos conquistados</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
      </ShowCase>
    </Section>
  )
}

export default ThirdSection