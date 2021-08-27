import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
// use it just like a RRv4/5 <NavLink> (see RRv4/5 api for details)
// it will be active only if both the path and hash fragment match


import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
    if (typeof window !== "undefined"){
      window.addEventListener("scroll", () => 
      setScrolled(window.pageYOffset > 100)
      );
    }
  },[]);

  return (
    <HeaderContainer scrolled={scrolled} showMenu={showMenu}>
      <Wrapper>
        <StyledLink to="/#" onClick={() => setShowMenu(false)}>Birgitta Ryås</StyledLink>
        <NavContainer active={showMenu}>
            <HashHeaderLink
              to="/#gallery"
              activeClassName="selected"
              activeStyle={{ textDecoration: 'underline' }} onClick={() =>{setShowMenu(false)}}
            >
              Galleri
            </HashHeaderLink>
            <HeaderLink to="/contact" activeClassName="selected"
              activeStyle={{ textDecoration: 'underline' }} onClick={() => setShowMenu(false)}>Kontakt</HeaderLink>
            <HeaderLink to="/about" activeClassName="selected"
              activeStyle={{ textDecoration: 'underline' }} onClick={() => setShowMenu(false)}>Om mig</HeaderLink>
        </NavContainer>
        <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      </Wrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
position: fixed;
width: 100%;
height: 60px;
top:0;
left:0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: ${(props) => (props.scrolled ? "rgba(248, 248, 248, 0.95)" : props.showMenu ? "rgba(248, 248, 248, 0.95)" : "rgba(248, 248, 248, 0)")};
box-shadow: ${(props) => (props.scrolled ? "5px 5px 15px rgba(0,0,0, 0.1);" : "5px 5px 15px rgba(0,0,0, 0);")};
z-index:2;
transition: 0.3s;
`

const Wrapper = styled.header`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 768px) {
    width: 90%;
  }
`

const StyledLink = styled(NavHashLink)`
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

const HashHeaderLink = styled(NavHashLink)`
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

