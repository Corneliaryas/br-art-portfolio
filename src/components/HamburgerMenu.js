import React from 'react'
import styled from 'styled-components'

export const HamburgerMenu = () => {
    return (
        <Hamburger>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </Hamburger>
    )
}

const Hamburger = styled.div`
width: 40px;
height: 30px;
display: none;
@media screen and (max-width: 768px) {
  display: block;
  }
`

const Line = styled.div`
width: 100%;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;`