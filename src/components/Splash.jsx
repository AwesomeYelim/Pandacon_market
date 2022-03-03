import React from 'react';
import styled from 'styled-components';
import Mainpanda from "../Images/main_character.svg";
import logo from "../Images/PANDACON.svg";

const Body = styled.body`
  position: relative;
  width: 375px;
  height: 100vh;
  background-color: #6B0090;
  margin: 0 auto;
`
const Div = styled.div`
  position: absolute;
  width: 50%;
  top: 30%;
  left: 25%;
  margin: 0 auto;
  text-align: center;
`
const Logo = styled.img.attrs({
  src: `${logo}`
})`
margin: 20px;
`;

const Splash = () => (
  <Body>
    <Div>
      <img src={Mainpanda} alt="mainpande" />
      <Logo />
    </Div>
  </Body>
);

export default Splash;