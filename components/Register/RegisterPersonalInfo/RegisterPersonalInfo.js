import React, { useState } from 'react'
import Link from 'next/link'
import {
  Section,
  Sidebar,
  FormWrapper,
  Logo,
  Steps,
  StepsList,
  FirstStepItem,
  StepItem,
  LastStepItem
} from './RegisterPersonalInfo.style'
import SvgMapping from '../../SvgMapping'

const RegisterPersonalInfo = () => {
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
                  <SvgMapping name='unfillRegisterHexagonGroup' />
                </a>
              </Link>
            </StepItem>
            <StepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup' />
                </a>
              </Link>
            </StepItem>
            <LastStepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup' />
                </a>
              </Link>
            </LastStepItem>
          </StepsList>
        </Steps>
      </Sidebar>
      <FormWrapper>tchaau</FormWrapper>
    </Section>
  )
}

export default RegisterPersonalInfo