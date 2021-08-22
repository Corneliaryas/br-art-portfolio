import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link to="/"><Logo>Birgitta Ryås</Logo></Link>
        <nav>
            <HeaderLink href="#">Galleri</HeaderLink>
            <HeaderLink href="#">Kontakt</HeaderLink>
            <HeaderLink href="#">Om mig</HeaderLink>
        </nav>
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
`

const Logo = styled.h2`
margin:0;
text-decoration: none;
`

const HeaderLink = styled.a`
margin:5px;
text-decoration: none;
color: black;
`

