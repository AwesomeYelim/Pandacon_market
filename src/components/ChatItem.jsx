import React from "react";
import styled from "styled-components";

const ChatItem = ({ userData }) => {
  const { nickName, type, postDate, chatMessage, src } = userData;
  console.log(src);
  return (
    <ChatItemCont>
      <ChatImgCont>
        <img src={src} alt="profile-img" />
      </ChatImgCont>
      <ChatContent>
        <ChatInfo>
          <NickName>{nickName}</NickName>
          <Division>{type}</Division>
          <PostDate>{postDate}</PostDate>
        </ChatInfo>
        <ChatMessage>{chatMessage}</ChatMessage>
      </ChatContent>
    </ChatItemCont>
  );
};

const ChatItemCont = styled.section`
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

export default ChatItem;
