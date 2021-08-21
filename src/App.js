import React from 'react'
import styled from 'styled-components'

import {Gallery} from 'components/Gallery'
import {Header} from 'components/Header'
import {Hero} from 'components/Hero'

export const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Gallery />
    </Container>
  )
}

const Container = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`