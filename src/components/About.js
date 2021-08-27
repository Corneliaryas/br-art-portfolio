import React from 'react'
import styled from 'styled-components'

import {SmallTitle} from 'components/StyledComponents'


export const About = () => {
    return (
        <Container>
            <Info>
                <Title>
                    Birgitta Ryås
                </Title>
                {/* <Title2>
                    Ryås
                </Title2> */}
                <SmallTitle>
                    Konstnär Präst Poet
                </SmallTitle>
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Paragraph>
                <SmallTitle>
                    Bakgrund
                </SmallTitle>
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                </Paragraph>
            </Info>
            <Image />
        </Container>
    )
}

const Container = styled.section`
display: flex;
width: 70%;
padding: 20px;
@media screen and (max-width: 768px) {
  width: 90%;
  flex-direction: column;
  align-items: center;
  }
`

const Image = styled.img`
width: 700px;
height: 700px;
background-color: #ddd;
margin: 10px;
/* max-width: 700px;
max-height: 700px; */
@media screen and (max-width: 768px) {
  /* width: 100%;
  height: 100%; */
  width: 80vw;
  height: 400px;
  }
`
const Info = styled.div`
position: relative;
margin: 0 20px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 700px;
@media screen and (max-width: 768px) {
  margin: 0 10px;
  }`

const Title = styled.h2`
font-size: 120px;
font-weight: 200;
margin: 20px 0;
margin-bottom: 30px;
@media screen and (max-width: 768px) {
    font-size: 90px;
  }`

// const Title2 = styled.h2`
// position: absolute;
// left: 35%;
// top: 28%;
// font-size: 140px;
// font-weight: 200;
// margin: 20px 0;
// text-align: right;
// `

const Sub = styled.h2`
font-size: 24px;
font-family: 'Kalam', cursive;
margin: 10px 0;
margin-top: 30px;`


const Paragraph = styled.p`
margin: 5px 0; `