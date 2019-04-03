import React from 'react'
import {Section, Description, Container, TextInput, Button} from './FourthSection.style'

const FourthSection = () => {
  return (  
    <Section>
        <Description>
            Caso ainda esteja com dúvidas, deixe seu e-mail para batermos um papo. :)
        </Description>
        <Container>
          <form>
            <TextInput type="Text" placeholder='Seu email de contato'/>
            <Button type="submit" value="Enviar">Enviar</Button>
          </form>
        </Container>
    </Section>
  )
}

export default FourthSection