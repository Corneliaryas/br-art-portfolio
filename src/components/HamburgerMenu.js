import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <Hamburger onClick={() => setShowMenu(!showMenu)}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </Hamburger>
        {showMenu &&
        <NavContainer>
            <HeaderLink to="/" onClick={() => setShowMenu(false)}>Galleri</HeaderLink>
            <HeaderLink to="/contact" onClick={() => setShowMenu(false)}>Kontakt</HeaderLink>
            <HeaderLink to="/about" onClick={() => setShowMenu(false)}>Om mig</HeaderLink>
        </NavContainer>
        }
        </>
    )
}

const Hamburger = styled.div`
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

const NavContainer = styled.nav`
position: absolute;
top: 60px;
left:0;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
z-index: 2;
background-color: #f5f5f5;
margin: 0;
padding 0;
`

const HeaderLink = styled(NavLink)`
margin:20px;
text-decoration: none;
color: black;
font-weight: bold;
font-size: 20px;
`

