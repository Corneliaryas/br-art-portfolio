import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Logo>Birgitta Ryås</Logo>
        <nav>
            <Link href="#">Galleri</Link>
            <Link href="#">Kontakt</Link>
            <Link href="#">Om mig</Link>
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
`

const Link = styled.a`
margin:5px;
text-decoration: none;
color: black;
`