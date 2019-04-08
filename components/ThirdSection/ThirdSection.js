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
          <NavigationItem>
            <button
              onClick={() =>
                setShow({
                  editor: true,
                  forum: false,
                  formulario: false,
                  perfil: false
                })}
            >
              Editor
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem>
            <button onClick={() => setShow({ editor: false, forum: true, formulario: false, perfil: false })}>Fórum</button>
          </NavigationItem>
          <Pipe />
          <NavigationItem>
            <button>Fórum</button>
          </NavigationItem>
          <Pipe />
          <NavigationItem>
            <button>Fórum</button>
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
          <ImageContainer>
            <ImageHive src={Image} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>AAQUI TA O FORUM TCHIQUIBROWN</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Armazenamento e compartilhamento dentro da própria plataforma</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
      </ShowCase>
    </Section>
  )
}

export default ThirdSection