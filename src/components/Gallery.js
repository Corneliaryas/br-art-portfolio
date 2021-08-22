import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// const imageArr = [1,2,3,4,5,6]

const imageArrD = [
  { title: 'Hav',
    source: 'images/paintings/hav.jpg',
    id: 1 },
  { title: 'Hjortron',
    source: 'images/paintings/hjortron.jpg',
    id: 2 },
  { title: 'Hjortrondelikatess',
    source: 'images/paintings/delikatess.jpg',
    id: 3 },
    { title: 'Båt',
    source: 'images/paintings/bat.jpg',
    id: 4 },
  { title: 'Hav',
    source: 'images/paintings/hav_2.jpg',
    id: 5 },
  { title: 'Skinnarviksparken',
    source: 'images/paintings/skinnarviksparken.jpg',
    id: 6 },
    { title: 'Glänta',
    source: 'images/paintings/glanta.jpg',
    id: 7 },
  { title: 'Måla',
    source: 'images/paintings/mala.jpg',
    id: 8 },
    { title: 'Hjortronhink',
    source: 'images/paintings/hjortronhink.jpg',
    id: 9 },
    { title: 'Viken',
    source: 'images/paintings/vik.jpg',
    id: 10 }
]

const imageArrA = [
  { title: 'Hav',
    source: 'images/paintings/hav.jpg',
    id: 1 },
  { title: 'Hjortron',
    source: 'images/paintings/hjortron.jpg',
    id: 2 },
  { title: 'Hjortron',
    source: 'images/paintings/delikatess.jpg',
    id: 2 },
]

const imageArrB = [
    { title: 'Hav',
      source: 'images/paintings/bat.jpg',
      id: 3 },
    { title: 'Båt',
      source: 'images/paintings/hav_2.jpg',
      id: 4 },
    { title: 'Båt',
      source: 'images/paintings/skinnarviksparken.jpg',
      id: 4 },
  ]

  const imageArrC = [
    { title: 'Glänta',
      source: 'images/paintings/glanta.jpg',
      id: 5 },
    { title: 'Måla',
      source: 'images/paintings/mala.jpg',
      id: 6 },
      { title: 'Måla',
      source: 'images/paintings/hjortronhink.jpg',
      id: 6 }
  ]

export const Gallery = () => {
  return (
    <Container>
        <FirstRow>
      {imageArrD.map((item) => (
        // <PaintingContainer></PaintingContainer>
        <Link to={`paintings/${item.id}`}>
          <Painting src={item.source} alt={item.source}/>
          </Link>
      ))}</FirstRow>
      {/* <FirstRow>
      {imageArrB.map((item) => (
        <PaintingContainer key={item.id}>
          <Painting src={item.source} alt={item.source}/>
          { <p>{item.title}</p>}
        </PaintingContainer>
      ))}</FirstRow>
      <FirstRow>
      {imageArrC.map((item) => (
        <PaintingContainer key={item.id}>
          <Painting src={item.source} alt={item.source}/>
          { <p>{item.title}</p>}
        </PaintingContainer>
      ))}</FirstRow> */}
    </Container>
  )
}

const FirstRow = styled.div`
width: 100%;
/* max-height: 440px; */
display: flex;
flex-wrap: wrap;
/* flex-direction: row; */
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
/* max-width: 32%; */
height: 440px;
margin: 5px;
padding: 0;
`
const Painting = styled.img`
flex: 1 1 80px;
max-width:100%; 
max-height: 440px;
object-fit: cover;
padding:0;
margin: 15px;
`