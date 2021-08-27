import React from 'react'
import styled from 'styled-components'

import {SmallTitle} from 'components/StyledComponents'

export const Contact = () => {
    return (
        <Container>
                <SmallTitle>
                    Kontakt
                </SmallTitle>
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


const Paragraph = styled.p`
margin: 5px 0; `