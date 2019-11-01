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

import BackHexagon from '../BackHexagon'

import Image from './desktop.png'
import Nest from '../../assets/nest.png'
import Profile from '../../assets/profile.png'
import Editor from '../../assets/editor.png'
import Subjects from '../../assets/disciplinas.png'

const ThirdSection = () => {
  const [show, setShow] = useState({
    nest: true,
    editor: false,
    subjects: false,
    profile: false
  })

  return (
    <Section id='tools'>
      <BackHexagon side="left" show="half" scale='.85' transparent={true}/>
      <NavigationBar>
        <NavigationTitle>Editor sem complicações</NavigationTitle>
        <NavigationList>
          <NavigationItem show={show.nest}>
            <button
              onClick={() =>
                setShow({
                  nest: true,
                  editor: false,
                  subjects: false,
                  profile: false
                })}
            >
              Portal
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.editor}>
            <button 
              onClick={() =>
                setShow({
                  nest: false,
                  editor: true,
                  subjects: false,
                  profile: false
                })}
            >
              Editor
            </button>
          </NavigationItem>
          <Pipe />
          <NavigationItem show={show.subjects}>
            <button 
              onClick={() =>
                setShow({
                  nest: false,
                  editor: false,
                  subjects: true,
                  profile: false
                })}
            >
              Disciplinas
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
            <ImageHive src={Nest} />
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
        <ShowCaseItem show={show.editor}>
          <ImageContainer right>
            <ImageHive right src={Editor} />
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
            <Description right>Organização com sistema de árvores para melhor segmentação no momento de compartilhar</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.subjects}>
          <ImageContainer>
            <ImageHive src={Subjects} />
          </ImageContainer>
          <ShowCaseDescription>
            <LineWrapper up>
              <LineDiagonal up />
              <LineHorizontal up />
              <LineVertical up />
            </LineWrapper>
            <Description up>Tarefas organizadas de acordo com as entregas pedidas</Description>
            <LineWrapper>
              <LineDiagonal />
              <LineHorizontal />
              <LineVertical />
            </LineWrapper>
            <Description>Downloads e uploads de arquivos demandados pelo corpo docente</Description>
          </ShowCaseDescription>
        </ShowCaseItem>
        <ShowCaseItem show={show.profile}>
          <ImageContainer right>
            <ImageHive right src={Profile} />
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