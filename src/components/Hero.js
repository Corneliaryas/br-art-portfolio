import React, { forwardRef } from 'react'
import styled from 'styled-components'


export const Hero = forwardRef(({onDownClick}, ref)  => {

    return(
        <Container>
            <TitleContainer>
            <Sub>Portfolio</Sub>
              <Title>Birgitta</Title>
              <Title2>Ryås</Title2>
            </TitleContainer>
            
            <HeroImage src="images/paintings/hav_2.jpg" alt="field"/>
            <Symbol onClick={onDownClick} src="images/Arrow.svg"/>
        </Container>
    );
})
const Container = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 95vh;
margin-bottom: 20px;
padding: 100px 0;
box-sizing: border-box;
@media screen and (max-width: 768px) {
    width:100%;
    height: 95vh;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 100px;
    box-sizing: border-box;
  }
`
const TitleContainer = styled.div`
position: relative;
width: 40%;
z-index:1;
`

const Title = styled.h2`
font-size: 150px;
font-weight: 400;
margin: 10px 0;
margin-bottom: 150px;
color: black;
@media screen and (max-width: 768px) {
    font-size: 90px;
    margin-top: 80px;
    margin-bottom: 100px;
  }`

const Title2 = styled.h2`
position: absolute;
left: 250px;
bottom:0;
font-size: 150px;
font-weight: 400;
margin: 20px 0;
text-align: right;
color: black;
@media screen and (max-width: 768px) {
    font-size: 90px;
    margin-top: 80px;
    left: 140px;
    top: 90px;
  }
`

const Sub = styled.h2`
font-size: 72px;
font-weight: normal;
margin: 5px;
font-family: 'Niconne', cursive;
/* font-family: 'Cagliostro', sans-serif; */
color: black;
z-index: 1;
@media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

const HeroImage = styled.img`
position: absolute;
top:0;
right:0;
width: 100%;
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

const Symbol = styled.img`
width: 80px;
height: 80px;
z-index: 1;
opacity: 0.8;
cursor: pointer;`