import React from "react";
import styled from "styled-components";
import Pandamoney from "../Images/icon/pandamoney.svg";
import Detail from "../Images/icon/detail.svg";
import Rarrow from "../Images/icon/R_arrow.svg";

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 300px;
  height: 100vh;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  // border: 1px solid #ccc;
  box-sizing: border-box;
`;
const Greeting = styled.section`
  margin-top: 28px;
  height: 50px;
  line-height: 35px;
`;
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const P = styled.p`
  font-size: 20px;
`;
const Aboutmoney = styled.section`
  width: 100%;
`;
const Balance = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;
  align-items: center;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-top: 50px;
`;
const Balancewon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Span = styled.span`
  font-size: 10px;
  color: #909090;
`;
const Charge = styled.button`
  width: 45%;
  height: 100%;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding: 15% 14%;
  background-color: #6b0090;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Btnmoney = styled.button`
  float: left;
  width: 48%;
  margin-top: 10px;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3;
  border-radius: 5px;
  height: 123.21px;
  background-color: #f5f5f5;
  border: none;
  margin-right: 2%;
  cursor: pointer;
`;

const Multibutton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Fbutton = styled.button`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
  border-radius: 5px;
  padding: 4%;
  background-color: #f5f5f5;
  color: #909090;
  border: 2px solid #6b0090;
  background-color: transparent;
  margin-top: 15px;
  cursor: pointer;
`;
const Mbutton = styled.button`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
  border-radius: 5px;
  padding: 4%;
  background-color: #f5f5f5;
  color: #909090;
  border: none;
  cursor: pointer;
`;
const Btnlogout = styled.button`
  position: absolute;
  bottom: 15px;
  width: 100px;
  border: 2px solid #6b0090;
  color: #6b0090;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
const Modal = () => (
  <Wrap>
    <Greeting>
      <H1>멋진예림님,</H1>
      <P> 안녕하세요 ! </P>
    </Greeting>
    <Aboutmoney>
      <Balance>
        <Balancewon>
          <Span>판다콘 머니</Span>
          <P>6,000원</P>
        </Balancewon>
        <Charge>
          + 지금
          <br />
          충전하기
        </Charge>
      </Balance>
      <Btnmoney>
        <img src={Pandamoney} alt="Pandamoney" />
        <Span>판다콘 머니 내역</Span>
      </Btnmoney>
      <Btnmoney>
        <img src={Detail} alt="Detail" />
        <Span>구매 내역</Span>
      </Btnmoney>
    </Aboutmoney>
    <Multibutton>
      <Fbutton>
        결제수단 변경
        <img src={Rarrow} alt="Rarrow" />
      </Fbutton>
      <Mbutton>
        고객센터
        <img src={Rarrow} alt="Rarrow" />
      </Mbutton>
      <Mbutton>
        할인코드 입력
        <img src={Rarrow} alt="Rarrow" />
      </Mbutton>
      <Mbutton>
        알림설정
        <img src={Rarrow} alt="Rarrow" />
      </Mbutton>
      <Mbutton>
        개인정보 수정
        <img src={Rarrow} alt="Rarrow" />
      </Mbutton>
    </Multibutton>
    <Btnlogout>로그아웃</Btnlogout>
  </Wrap>
);

export default Modal;
