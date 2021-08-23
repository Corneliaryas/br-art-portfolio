import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <StyledLink to="/">Birgitta Ryås</StyledLink>
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

const StyledLink = styled(Link)`
margin:0;
text-decoration: none;
font-weight: bold;
font-size: 20px;
color: black;
`

const HeaderLink = styled.a`
margin:5px;
text-decoration: none;
color: black;
`

