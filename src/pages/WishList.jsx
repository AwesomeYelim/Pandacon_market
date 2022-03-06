import React from "react";
import styled from "styled-components";
import Wishitem from "../components/Wishitem";
import Nav from "../components/Nav";
import Xbutton from "../Images/icon/x.svg";

function WishList() {
  return (
    <Container>
      <Header>
        <Exit src={Xbutton} />
        <Title>찜콘</Title>
      </Header>
      <Wishitem />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 360px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 75px;
`;

const Title = styled.p`
  padding-top: 20px;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Exit = styled.img`
  position: absolute;
  width: 11px;
  height: 28px;
  color: #bdbdbd;
  top: 5px;
  left: 15px;
  cursor: pointer;
`;

export default WishList;
