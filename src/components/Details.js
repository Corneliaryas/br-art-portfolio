import React, { useEffect, useState } from'react'
import styled from 'styled-components'
import { useParams } from 'react-router'

import {SmallTitle} from 'components/StyledComponents'

export const Details = () => {
    const params = useParams()
    const paintingID = params.paintingID
    const [paintings, setPaintings] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("/paintings.json")
        .then((res) => res.json())
        .then((data) => setPaintings(data))
    }, [paintingID])

    console.log(paintings)
    const painting = paintings ? paintings.filter(item => item.id.toString() === paintingID) : "nope";
    console.log(painting)
    return(
        <Container>
            {paintings &&
            <>
            <Image src={`../${painting[0].source}`}/>
            <Info>
                <SmallTitle>
                     {painting[0].title}
                </SmallTitle>
                <Paragraph>
                    Lite info om målningen här då, kanske teknik, tankar etc. Lite info om målningen här då, kanske teknik, tankar etc. Lite info om målningen här då, kanske teknik, tankar etc.
                    Lite info om målningen här då, kanske teknik, tankar etc.
                </Paragraph>
                <Paragraph>
                    Lite info om målningen här då, kanske teknik, tankar etc. Lite info om målningen här då, kanske teknik, tankar etc. 
                </Paragraph>
                <Price>
                    1200 kr
                </Price>
                <Paragraph>
                    Lägg beställning
                </Paragraph>
            </Info></>}
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
  }
`

const Image = styled.img`
max-width: 700px;
max-height: 700px;
@media screen and (max-width: 768px) {
  width: 100%;
  height: 100%;
  }
`
const Info = styled.div`
max-width: 700px;
margin: 0 20px;
display: flex;
flex-direction: column;
justify-content: flex-end;
@media screen and (max-width: 768px) {
  margin: 0 10px;
  }`



const Price = styled.p`
font-weight: bold;
font-size: 24px;
`
const Paragraph = styled.p`
margin: 5px 0; `