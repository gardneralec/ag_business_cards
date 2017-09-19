import React, { Component } from 'react';
import logo from './logo.svg';
import HeadIMG from './Alec_Headshot.png';

import styled from 'styled-components';

const PageContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
`;

const CardContainer = styled.div `
  width: 400px;
  height: 700px;
  max-width: 400px;
  max-height: 700px;
  margin: 0 auto;
  display: block;
  border: 1px solid #bbbbbb;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const Header = styled.div `
  width: 400px;
  height: 264px;
  background-color: blue;
`;

const HeaderBox = styled.div `
  padding: 16px 16px 0;
  text-align: center;

  > img {
    height: 175px;
    width: 175px;
  }

  > h1 {
    font-size: 24px;
    margin: 0;
  }
`;

const Callout = styled.div `
  height: 47px;
  width: 400px;
  background-color: lightblue;
`;

const ImageCallout = Callout.extend `
  > img {
    height: 60%;
    width: auto;
    margin: auto 30px;
  }

  > h3 {
    font-size: 18px;
  }
`;

const Body = styled.div `
  height: 313px;
  width: 400px;
  background-color: white;
`;

const Footer = styled.div `
  height: 29px;
  width: 400px;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <PageContainer>
        <CardContainer>
          <Header>
            <HeaderBox>
              <img src={HeadIMG} alt="Alec Gardner Headshot"/>
              <h1>Alec Gardner</h1>
            </HeaderBox>
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
