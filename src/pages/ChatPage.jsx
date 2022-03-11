import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import CloseBtnIcon from "../Images/icon/x.svg";
import Img from "../Images/pandaProfile.svg";

function ChatPage() {
  const userData = [
    {
      id: 1,
      nickName: "하양이",
      type: "판매자",
      postDate: "2022-01-04 10:22:48",
    },
    {
      id: 2,
      nickName: "멋예림",
      type: "구매자",
      postDate: "2022-01-03 11:22:48",
    },
  ];
  return (
    <Container>
      <Header>
        <CloseBtn>
          <img src={CloseBtnIcon} alt="창 닫기" />
        </CloseBtn>
        <Title>전체 대화 </Title>
      </Header>
      <ChatCont>
        <ChatItem>
          <ChatImgCont>
            <img src={Img} alt="profile-img" />
          </ChatImgCont>
          <ChatContent>
            <ChatInfo>
              <NickName>하양이</NickName>
              <Division>판매자</Division>
              <PostDate>2022-01-04 10:22:48</PostDate>
            </ChatInfo>
            <ChatMessage>[구매완료] 구매해주셔서 감사합니다. ^^</ChatMessage>
          </ChatContent>
        </ChatItem>
      </ChatCont>
      <Nav />
    </Container>
  );
}

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

const ChatItem = styled.section`
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  padding: 15px 0px;
`;

const ChatImgCont = styled.div`
  min-width: 75px;
  height: 75px;
  background-color: #e4e4e4;
  margin-right: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const ChatMessage = styled.small`
  font-size: 10px;
  color: #5b5b5b;
`;

const ChatInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NickName = styled.p`
  font-weight: 600;
  font-size: 17px;
  margin-right: 5px;
`;

const Division = styled.small`
  color: #6b0090;
  font-size: 10px;
  -webkit-transform: scale(0.83);
  width: 30px;
  height: 13px;
  border-radius: 2px;
  background-color: #d9c0e1;
  padding: 1px 6px 1px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 29px;
  -webkit-text-size-adjust: none;
`;

const PostDate = styled.small`
  color: #9d9d9d;
  font-size: 10px;
`;

export default ChatPage;
