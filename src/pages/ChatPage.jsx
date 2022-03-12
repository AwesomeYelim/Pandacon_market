import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import CloseBtnIcon from "../Images/icon/x.svg";
import ChatItem from "../components/ChatItem";
import PandaProfile from "../Images/pandaProfile.svg";
import exampleProfileImg from "../Images/exampleProfileImg.svg";
import ChatDetailPage from "./ChatDetailPage";

function ChatPage() {
  const userDatas = [
    {
      id: 1,
      nickName: "하양이",
      type: "판매자",
      postDate: "2022-01-04 10:22:48",
      chatMessage: "[구매완료] 구매해주셔서 감사합니다. ^^",
      src: `${PandaProfile}`,
    },
    {
      id: 2,
      nickName: "멋예림",
      type: "구매자",
      postDate: "2022-01-03 11:22:48",
      chatMessage: "[판매완료] 판매가 완료되었습니다.",
      src: `${exampleProfileImg}`,
    },
  ];
  return (
    <TempCont>
      <Container>
        <Header>
          <CloseBtn>
            <img src={CloseBtnIcon} alt="창 닫기" />
          </CloseBtn>
          <Title>전체 대화 </Title>
        </Header>
        <ChatCont>
          {userDatas.map((userData) => {
            return <ChatItem key={userData.id} userData={userData} />;
          })}
        </ChatCont>
        <Nav />
      </Container>
      <ChatDetailPage />
    </TempCont>
  );
}

const TempCont = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #fff;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 15px 35px 15px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  position: absolute;
  top: 20%;
  left: 15px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 23px;
`;

const ChatCont = styled.main`
  padding: 0px 26px 0px 29px;
`;

export default ChatPage;
