import React, { useEffect, useState } from'react'
import styled from 'styled-components'
import { useParams } from 'react-router'

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
    const painting = paintings ? paintings.filter(item => item.id == paintingID) : "nope";
    console.log(painting)
    return(
        <Container>
            {paintings &&
            <>
            <Image src={`../${painting[0].source}`}/>
            <Info>
                <Title>
                    {paintingID}
                     {painting[0].title}
                </Title>
                <Price>
                    1200 kr
                </Price>
                <Paragraph>
                    Lite info om målningen här då, kanske teknik, tankar etc.
                </Paragraph>
            </Info></>}
        </Container>
    )
} 

const Container = styled.section`
`

const Image = styled.img`
width:50%;
`
const Info = styled.div``
const Title = styled.h2``
const Price = styled.p``
const Paragraph = styled.p``