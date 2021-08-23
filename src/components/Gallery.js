import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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


export const Gallery = () => {
  return (
    <Container>
        <FirstRow>
      {imageArrD.map((item) => (
        <PaintingLink to={`paintings/${item.id}`}>
          <Painting src={item.source} alt={item.source}/>
        </PaintingLink>
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

const Container = styled.section`
width: 70%;
display: flex;
/* flex-wrap: wrap; */
justify-content: space-evenly;
background-color: #fafafa;
`
const FirstRow = styled.div`
width: 100%;
/* max-height: 440px; */
display: flex;
flex-wrap: wrap;
flex-direction: row;
background-color: #fafafa;
`
const PaintingLink = styled(Link)`
flex: 1 1 180px;
margin: 5px;
`
const Painting = styled.img`
min-width: 100%; 
max-height: 440px;
padding:0;
object-fit: cover;
`