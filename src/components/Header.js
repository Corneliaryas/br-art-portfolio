import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom';

import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <StyledLink to="/">Birgitta Ryås</StyledLink>
        <NavContainer>
            <HeaderLink to="/">Galleri</HeaderLink>
            <HeaderLink to="/">Kontakt</HeaderLink>
            <HeaderLink to="/">Om mig</HeaderLink>
        </NavContainer>
        <HamburgerMenu />
      </Wrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
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
  display: none;
  }
`

const HeaderLink = styled(NavLink)`
margin:5px;
text-decoration: none;
color: black;
`

