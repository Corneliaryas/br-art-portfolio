import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';

import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderContainer>
      <Wrapper>
        <StyledLink to="/" onClick={() => setShowMenu(false)}>Birgitta Ryås</StyledLink>
        <NavContainer active={showMenu}>
            <HeaderLink to="/" onClick={() => setShowMenu(false)}>Galleri</HeaderLink>
            <HeaderLink to="/contact" onClick={() => setShowMenu(false)}>Kontakt</HeaderLink>
            <HeaderLink to="/about" onClick={() => setShowMenu(false)}>Om mig</HeaderLink>
        </NavContainer>
        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      </Wrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
position: relative;
width: 100%;
height: 60px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #f5f5f5;
`

const Wrapper = styled.header`
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #f5f5f5;
@media screen and (max-width: 768px) {
    width: 90%;
  }
`

const StyledLink = styled(Link)`
margin:0;
text-decoration: none;
font-weight: bold;
font-size: 20px;
color: black;
`

const NavContainer = styled.nav`

@media screen and (max-width: 768px) {
display: ${(props) => (props.active === true ? "flex" : "none")};
position: absolute;
top: 60px;
left:0;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
z-index: 2;
background-color: #f5f5f5;
margin: 0;
padding 0;
}
`

const HeaderLink = styled(NavLink)`
margin:5px;
text-decoration: none;
color: black;
font-weight: bold;
@media screen and (max-width: 768px) {
margin:20px;
text-decoration: none;
color: black;
font-weight: bold;
font-size: 20px;
}
`

