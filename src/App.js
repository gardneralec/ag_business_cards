/*Begin Alec Gardner Business Card*/
import React, { Component } from 'react';
import headIMG from './Alec_Headshot.png';
import headerBG from './Blue_Polygon_background-01.png';
import reactLogo from './logo.svg';
import styled from 'styled-components';
import emailIcon from './Email_Icon.png';
import phoneIcon from './Phone_Icon.png';
import websiteIcon from './Website_Icon.png';
import githubIcon from './Github_Icon.png';
import linkedinIcon from './White_LI_Icon.png';

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
  height: 279px;
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
    font-size: 52px;
    margin-bottom: 0;
    margin-top: 16px;
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
  > div > img {
    height: auto;
    width: 25px;
    margin-right: 15px;
    float: left;
    margin-top: 10px;
  }

  > div > h3 {
    font-size: 26px;
    margin: 0;
    text-align: center;
    line-height: 100%;
    font-weight: 300;
    color: #ffffff;
    padding-top: 10px;
    float: left;
  }
`;

const ImageCalloutBox = styled.div `
  padding: 0 16px;
`;

const Body = styled.div `
  height: 313px;
  width: 400px;
  background-color: white;
`;

const BodyBox = styled.div `
  padding: 0 16px;
  
  > div > img {
    width: 21px;
    height: auto;
    float: left;
    margin-bottom: 0;
    margin-right: 15px;
    margin-top: 3x;
  }

  > div > h3 {
    font-size: 24px;
    text-align: left;
    margin: 0;
    line-height: 100%;
    float: left;
    font-weight: 300;
  }
`;

const GreyLine = styled.div `
  width: 100%;
  border-bottom: 2px solid #dddddd;
  padding-top: 10px;
  clear:both;

`;

function InfoBlockCreator(props) {
  let x = "";

  if (props.first) {
    x = {paddingTop: '43px',};
  }

  else if (props.last) {
    x = {paddingBottom: '35px', paddingTop:'30px',};
  }

  else {
    x = {paddingTop: '30px',};
  }

  var infoStyles = x;

  return (
    <div style={infoStyles}>
      <img src={props.src} alt={props.alt} />
      <h3>{props.children}</h3>
      <GreyLine />
    </div>
  );
};

const Footer = styled.div `
  height: 14px;
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
          <Body>
            <BodyBox>
              <InfoBlockCreator first src={emailIcon} alt="Alec Gardner Email Address">alec@alecgardner.com</InfoBlockCreator>
              <InfoBlockCreator src={phoneIcon} alt="Alec Gardner Phone Number">1-719-310-8396</InfoBlockCreator>
              <InfoBlockCreator src={websiteIcon} alt="Alec Gardner Website">alecgardner.com</InfoBlockCreator>
              <InfoBlockCreator last src={githubIcon} alt="Alec Gardner GitHub">github.com/gardneralec</InfoBlockCreator>
            </BodyBox>
          </Body>
          <ImageCallout>
            <ImageCalloutBox>
              <img src={linkedinIcon} alt="Alec Gardner LinkedIn Profile"/>
              <h3>linkedin.com/in/gardneralec</h3>
            </ImageCalloutBox>
          </ImageCallout>
          <Footer/>
        </CardContainer>
      </PageContainer>
    );
  }
}

export default App;
