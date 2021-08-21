import React from 'react'
import styled from 'styled-components'


export const Hero = ()  => {
    return(
        <Container>
            <TitleContainer>
            <Title>Birgitta Ryås</Title>
            <Sub>Akvarellportfolio</Sub>
            </TitleContainer>
            <HeroImage src="images/paintings/hav_2.jpg" alt="field"/>
        </Container>
    );
}

const Title = styled.h1`
font-size: 90px;
font-weight: lighter;
margin: 10px;`

const Sub = styled.h2`
font-size: 60px;
font-weight: bold;
margin: 10px;`

const Container = styled.div`
width: 100%;
position: relative;
display: flex;
justify-content: flex-end;
align-items: center;
height: 600px;
`
const TitleContainer = styled.div`
width: 80%;
z-index:1;
`

const ImageContainer = styled.div`
position: absolute;
top:0;
right:0;
width: 60%;
height: 600px;
background-color:lightblue;
z-index:0;
object-fit: contain;
overflow: hidden;
`
const HeroImage = styled.img`
position: absolute;
top:0;
right:0;
width: 60%;
height: 600px;
background-color:lightblue;
z-index:0;
object-fit: cover;
overflow: hidden;
 `
