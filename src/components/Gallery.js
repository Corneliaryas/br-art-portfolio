import React, { forwardRef } from 'react'
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


export const Gallery = forwardRef(({onDownClick}, ref) => {
  return (
    <Container id="gallery" ref={ref}>
        <FirstRow>
      {imageArrD.map((item) => (
        <PaintingLink to={`paintings/${item.id}`}>
          <Painting src={item.source} alt={item.source}/>
        </PaintingLink>
      ))}</FirstRow>
    </Container>
  )
})

const Container = styled.section`
width: 80%;
display: flex;
justify-content: space-evenly;
background-color: #fafafa;
@media screen and (max-width: 768px) {
    width:90%;
  }
`
const FirstRow = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: row;
background-color: #fafafa;
@media screen and (max-width: 768px) {
  flex-wrap: nowrap;
  flex-direction: column;
  }
`
const PaintingLink = styled(Link)`
flex: 1 1 180px;
margin: 5px;
@media screen and (max-width: 768px) {
    width:100%;
    flex: none;
    margin: 5px 0;
  }
`
const Painting = styled.img`
min-width: 100%; 
max-height: 440px;
padding:0;
object-fit: cover;
@media screen and (max-width: 768px) {
    width:100%;
    max-height: 100%;
  }
`