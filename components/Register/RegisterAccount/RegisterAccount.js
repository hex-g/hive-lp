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
} from './RegisterAccount.style'
import SvgMapping from '../../SvgMapping'

const RegisterAccount = () => {
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
            <StepItem>
              <Link href='#'>
                <a>
                  <SvgMapping name='unfillRegisterHexagonGroup'/>
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
      <FormWrapper>
        <Link href='/RegisterPersonalInfo'>
          <a>
            Clica aqaui!
          </a>
        </Link>
      </FormWrapper>
    </Section>
  )
}

export default RegisterAccount