import React from 'react'
import styled from 'styled-components'

export const HamburgerMenu = ({showMenu, setShowMenu}) => {

    return (
        <Hamburger onClick={() => setShowMenu(!showMenu)}>
            <Line1 active={showMenu}></Line1>
            <Line2 active={showMenu}></Line2>
            <Line3 active={showMenu}></Line3>
        </Hamburger>
    )
}

const Hamburger = styled.div`
position: relative;
width: 40px;
height: 30px;
display: none;
cursor: pointer;
justify-content: center;
@media screen and (max-width: 768px) {
  display: flex;
  }
`

const Line1 = styled.div`
position: absolute;
top: ${props => props.active ? "10px" : "0"};
width: 100%;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;
transform: ${props => props.active ? "rotate(45deg)" : "rotate(0)"};
transition: 0.3s;`

const Line2 = styled.div`
position: absolute;
width: ${props => props.active ? "0" : "100%"};
top: 10px;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;
transition: 0.3s;`

const Line3 = styled.div`
position: absolute;
top: ${props => props.active ? "10px" : "20px"};
width: 100%;
height: 4px;
border-radius: 50px;
background-color: black;
margin: 5px;
transform: ${props => props.active ? "rotate(-45deg)" : "rotate(0)"};
transition: 0.3s;`

