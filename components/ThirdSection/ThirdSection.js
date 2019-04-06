import React from 'react'
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
  return (
    <Section>
      <NavigationBar>
        <NavigationTitle>Editor sem complicações</NavigationTitle>
        <NavigationList>
          <NavigationItem>Editor</NavigationItem>
          <Pipe />
          <NavigationItem>Fórum</NavigationItem>
          <Pipe />
          <NavigationItem>Formulário</NavigationItem>
          <Pipe />
          <NavigationItem>Perfil</NavigationItem>
        </NavigationList>
      </NavigationBar>
      <ShowCase>
        <ShowCaseItem>
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
      </ShowCase>
    </Section>
  )
}

export default ThirdSection