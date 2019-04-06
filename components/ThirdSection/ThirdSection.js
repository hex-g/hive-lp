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
  DescriptionUp,
  DescriptionDown,
  LineWrapperUp,
  LineWrapperDown,
  LineHorizontalUp,
  LineHorizontalDown,
  LineVerticalUp,
  LineVerticalDown,
  LineDiagonalUp,
  LineDiagonalDown
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
            <LineWrapperUp>
              <LineDiagonalUp />
              <LineHorizontalUp />
              <LineVerticalUp />
            </LineWrapperUp>
            <DescriptionUp>Suporte completo ao Markdown com três modos de visualizaço</DescriptionUp>
            <LineWrapperDown>
              <LineDiagonalDown />
              <LineHorizontalDown />
              <LineVerticalDown />
            </LineWrapperDown>
            <DescriptionDown>Armazenamento e compartilhamento dentro da própria plataforma</DescriptionDown>
          </ShowCaseDescription>
        </ShowCaseItem>
      </ShowCase>
    </Section>
  )
}

export default ThirdSection