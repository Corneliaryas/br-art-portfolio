import React from 'react'
import styled from 'styled-components'

export const HamburgerMenu = ({showMenu, setShowMenu}) => {

    return (
        <Hamburger onClick={() => setShowMenu(!showMenu)}>
            {!showMenu && <>
            <Line></Line>
            <Line></Line>
            <Line></Line>
            </>
        }
        {showMenu && <>
        <Cross1></Cross1>
        <Cross2></Cross2>
        </>
        }
        </Hamburger>
    )
}

const Hamburger = styled.div`
position: relative;
width: 40px;
height: 30px;
display: none;
cursor: pointer;
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

const Cross1 = styled.div`
position: absolute;
top: 10px;
width: 80%;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;
transform: rotate(45deg);`

const Cross2 = styled.div`
position: absolute;
top: 10px;
width: 80%;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;
transform: rotate(-45deg);`
