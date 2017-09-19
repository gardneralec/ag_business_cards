import React, { Component } from 'react';
import headIMG from './Alec_Headshot.png';
import headerBG from './Blue_Polygon_background-01.png';
import styled from 'styled-components';

const PageContainer = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  overflow-y: scroll;
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
  background: darkblue url("${headerBG}") no-repeat center center;
  background-size: cover;
`;

const HeaderBox = styled.div `
  padding: 16px 16px 0;
  text-align: center;

  > img {
    height: 175px;
    width: 175px;
  }

  > h1 {
    font-size: 48px;
    margin-bottom: 0;
    margin-top: 7px;
    font-weight: 400;
    color: #ffffff;
    line-height: 100%
  }
`;

const Callout = styled.div `
  height: 47px;
  width: 400px;
  background-color: #009ac5;

  > h3 {
    font-size: 26px;
    margin: 0;
    text-align: center;
    line-height: 100%;
    font-weight: 300;
    color: #ffffff;
    padding-top: 10px;
  }
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
              <img src={headIMG} alt="Alec Gardner Headshot"/>
              <h1>Alec Gardner</h1>
            </HeaderBox>
          </Header>
          <Callout>
            <h3>Digital Marketer | Web Developer</h3>
          </Callout>
          <Body></Body>
          <ImageCallout></ImageCallout>
          <Footer/>
        </CardContainer>
      </PageContainer>
    );
  }
}

export default App;
