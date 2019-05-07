import React, { useState } from 'react'
import Link from 'next/link'
import {
  Section,
  Sidebar,
  Logo,
  Steps,
  StepsList,
  FirstStepItem,
  StepItem,
  LastStepItem,
  ImageWrapper,
  FormWrapper,
  Form,
  ButtonWrapper,
  FlavorText,
  Button,
  ConfirmationWrapper,
  ConfirmationItem
} from './RegisterConfirmation.style'
import SvgMapping from '../../SvgMapping'

const RegisterConfirmation = () => {
  return (
    <Section>
      <Sidebar>
        <Logo>
          <Link href='/'>
            <a>
              <SvgMapping name='logo' />
            </a>
          </Link>
        </Logo>
        <Steps>
          <StepsList>
            <FirstStepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='registerHexagonGroup' />
                </a>
              </Link>
            </FirstStepItem>
            <StepItem fill>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup'/>
                </a>
              </Link>
            </StepItem>
            <LastStepItem fill>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroupConfirmation' />
                </a>
              </Link>
            </LastStepItem>
          </StepsList>
        </Steps>
        <ImageWrapper>
          <SvgMapping name='gamification' />
        </ImageWrapper>
      </Sidebar>
      <FormWrapper>
        <Form>
          <FlavorText>
            Pronto! Confira se está tudo certinho.
          </FlavorText>
          <ConfirmationWrapper>
            <ConfirmationItem>
              <div>oi</div>
              <div>tchau</div>
            </ConfirmationItem>
            <ConfirmationItem>
              <div>oi</div>
              <div>tchau</div>
            </ConfirmationItem>
          </ConfirmationWrapper>
        </Form>
        <ButtonWrapper>
          <Button cancel>
            <Link href='/RegisterPersonalInfo'>
              Voltar
            </Link>
          </Button>
          <Button>
            <Link href='/'>
              Finalizar
            </Link>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Section>
  )
}

export default RegisterConfirmation