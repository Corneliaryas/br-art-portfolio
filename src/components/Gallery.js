import React from 'react'
import styled from 'styled-components'

// const imageArr = [1,2,3,4,5,6]

const imageArrA = [
  { title: 'Hav',
    source: 'images/paintings/hav.jpg',
    id: 1 },
  { title: 'Hjortron',
    source: 'images/paintings/hjortron.jpg',
    id: 2 }
]

const imageArrB = [
    { title: 'Hav',
      source: 'images/paintings/bat.jpg',
      id: 3 },
    { title: 'Båt',
      source: 'images/paintings/hav_2.jpg',
      id: 4 },
  ]

  const imageArrC = [
    { title: 'Glänta',
      source: 'images/paintings/glanta.jpg',
      id: 5 },
    { title: 'Måla',
      source: 'images/paintings/mala.jpg',
      id: 6 }
  ]

export const Gallery = () => {
  return (
    <Container>
        <FirstRow>
      {imageArrA.map((item) => (
        <PaintingContainer key={item.id}>
          <Painting src={item.source} alt={item.source}/>
          {/* <p>{item.title}</p> */}
        </PaintingContainer>
      ))}</FirstRow>
      <FirstRow>
      {imageArrB.map((item) => (
        <PaintingContainer key={item.id}>
          <Painting src={item.source} alt={item.source}/>
          {/* <p>{item.title}</p> */}
        </PaintingContainer>
      ))}</FirstRow>
      <FirstRow>
      {imageArrC.map((item) => (
        <PaintingContainer key={item.id}>
          <Painting src={item.source} alt={item.source}/>
          {/* <p>{item.title}</p> */}
        </PaintingContainer>
      ))}</FirstRow>
    </Container>
  )
}

const FirstRow = styled.div`
width: 32%;
display: flex;
flex-direction: column;
background-color: #fafafa;
`

const Container = styled.section`
width: 70%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
background-color: #fafafa;
`
const PaintingContainer = styled.div`
width: 100%;
margin: 5px;
padding: 0;
`
const Painting = styled.img`
width:100%;
max-height: 400px;
object-fit: cover;
padding:0;
margin: 0;
`