import React from 'react'
import styled from 'styled-components'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'  

import {Header} from 'components/Header'
import {Start} from 'components/Start'
import {Details} from 'components/Details'
import { About } from 'components/About'
import { Contact } from 'components/Contact'

export const App = () => {
  return (
    <Router>
    <Container>
      <Header />
      <Switch>
        <Route path="/paintings/:paintingID" exact>
          <Details />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </Container>
    </Router>
  )
}

const Container = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 60px;
`