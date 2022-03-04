import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 0;
  z-index: 9;
  width: 300px;
  height: 100vh;
  padding: 30px;
  background-color: #fff;
  box-sizing: border-box;
`;
const H1 = styled.h1`
    font-size: 30px;
    font-weight: 900;
`;

const Modal = () => (
<Div>
    <H1>멋진예림님,</H1>
    <p> 안녕하세요 ! </p>
</Div>
);

export default Modal;
