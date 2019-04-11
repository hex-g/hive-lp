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
    editor: true,
    forum: false,
    formulario: false,
    perfil: false
  })

  return (
    <Section>
      <NavigationBar>
        <NavigationTitle>Editor sem complicações</NavigationTitle>
        <NavigationList>
          <NavigationItem show={show.editor}>
            <button
              onClick={() =>
                setShow({
                  editor: true,
                  forum: false,
                  formulario: false,
                  perfil: false
                })}
            >
              Anotações
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.forum}>
            <button 
              onClick={() =>
                setShow({
                  editor: false,
                  forum: true,
                  formulario: false,
                  perfil: false
                })}
            >
              Fórum
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.formulario}>
            <button 
              onClick={() =>
                setShow({
                  editor: false,
                  forum: false,
                  formulario: true,
                  perfil: false
                })}
            >
              Formulário
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.perfil}>
            <button 
              onClick={() =>
                setShow({
                  editor: false,
                  forum: false,
                  formulario: false,
                  perfil: true
                })}
            >
              Perfil
            </button>
          </NavigationItem>
        </NavigationList>
      </NavigationBar>
      <ShowCase>
        <ShowCaseItem show={show.editor}>
          <ImageContainer>
            <ImageHive src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>Suporte completo ao Markdown com três modos de visualizaço</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.forum}>
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
            <Description right>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.formulario}>
          <ImageContainer>
            <ImageHive src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>Compartilhamento de informações entre alunos e professores</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.perfil}>
          <ImageContainer right>
            <ImageHive right src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper right up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description right up>Compartilhamento de informações entre alunos e professores</Description>
            <LineWrapper right>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description right>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
      </ShowCase>
    </Section>
  )
}

export default ThirdSection