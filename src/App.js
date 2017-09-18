import React, { Component } from 'react';
import logo from './logo.svg';

import styled from 'styled-components';

const PageContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
`;

const CardContainer = styled.div `
  width: 600px;
  height: 1050px;
  max-width: 600px;
  max-height: 1050px;
  margin: auto auto;
  display: block;
  border: 1px solid #bbbbbb;
`;

const Header = styled.div `
  width: 600px;
  height: 350px;
  background-color: blue;
`;

const Callout = styled.div `
  height: 75px;
  width: 600px;
  background-color: lightblue;
`;

const Body = styled.div `
  height: 500px;
  width: 600px;
  background-color: white;
`;

const Footer = styled.div `
  height: 50px;
  width: 600px;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <PageContainer>
        <CardContainer>
          <Header>
          </Header>
          <Callout></Callout>
          <Body></Body>
          <Callout></Callout>
          <Footer/>
        </CardContainer>
      </PageContainer>
    );
  }
}

export default App;
