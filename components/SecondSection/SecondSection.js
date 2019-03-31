import React from 'react'
import { Section, Title, SquareContainer, Square, SquareTwo, Image, TitleSquare, Text } from './SecondSection.style'

const SecondSection = () => {
    return (
        <Section>
            <Title>O que é Hive ?</Title>
            <SquareContainer>
                <Square>
                    <Image />
                    <TitleSquare>Organize suas anotações</TitleSquare>
                    <Text>Um local dedicado a suas anotações.</Text>
                </Square>
                <Square>
                    <Image />
                    <TitleSquare>Salve seus arquivos</TitleSquare>
                    <Text>Armazene suas anotações na nuvem.</Text>
                </Square>
                <Square>
                    <Image />
                    <TitleSquare>Suporte a Markdown</TitleSquare>
                    <Text>Anotações que suportam Markdown.</Text>
                </Square>
            </SquareContainer>
            <Text>Bacon ipsum dolor amet tri-tip turkey pork loin boudin tenderloin strip steak tail fatback jerky pig.Bacon ipsum dolor amet tri-tip turkey pork loin boudin tenderloin strip steak tail fatback jerky pig.</Text>
        </Section>
    )
}

export default SecondSection