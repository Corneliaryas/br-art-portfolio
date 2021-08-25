import React from 'react'
import styled from 'styled-components'

export const Contact = () => {
    return (
        <Container>
                <Sub>
                    Kontakt
                </Sub>
                <Paragraph>
                    Intresserad av en målning? Skicka ett mail till bryas @ gmail.com
                </Paragraph>
        </Container>
    )
}

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 70%;
padding: 20px;
@media screen and (max-width: 768px) {
  width: 90%;
  }
`


const Sub = styled.h2`
font-size: 24px;
font-family: 'Kalam', cursive;`


const Paragraph = styled.p`
margin: 5px 0; `