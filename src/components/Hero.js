import React from 'react'
import styled from 'styled-components'


export const Hero = ()  => {
    return(
        <Container>
            <TitleContainer>
            <Title>Birgitta</Title>
            <Title2>Ryås</Title2>
            <Sub>Akvarellportfolio</Sub>
            </TitleContainer>
            <HeroImage src="images/paintings/hav_2.jpg" alt="field"/>
        </Container>
    );
}
const Container = styled.div`
width: 70%;
position: relative;
display: flex;
justify-content: flex-end;
align-items: center;
height: 800px;
margin-bottom: 20px;
@media screen and (max-width: 768px) {
    width:100%;
    height: 85vh;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 100px;
    box-sizing: border-box;
  }
`
const TitleContainer = styled.div`
position: relative;
width: 90%;
z-index:1;
`
// const Title = styled.h1`
// font-size: 120px;
// font-weight: 200;
// margin: 5px;
// @media screen and (max-width: 768px) {
//     font-size: 90px;
//     margin-top: 80px;
//   }
// `

const Title = styled.h2`
font-size: 150px;
font-weight: 200;
margin: 20px 0;
margin-bottom: 150px;
@media screen and (max-width: 768px) {
    font-size: 90px;
    margin-top: 80px;
    margin-bottom: 100px;
  }`

const Title2 = styled.h2`
position: absolute;
left: 250px;
top: 33%;
font-size: 150px;
font-weight: 200;
margin: 20px 0;
text-align: right;
@media screen and (max-width: 768px) {
    font-size: 90px;
    margin-top: 80px;
    left: 140px;
    top: 90px;
  }
`

const Sub = styled.h2`
font-size: 80px;
font-weight: 400;
margin: 5px;
font-family: 'Kalam', cursive;
@media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

const HeroImage = styled.img`
position: absolute;
top:0;
right:0;
width: 66%;
height: 100%;
z-index:0;
object-fit: cover;
overflow: hidden;
@media screen and (max-width: 768px) {
    font-size: 20px;
    top: auto;
    bottom:0;
    right:0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
 `
