import React from "react";
import styled from "styled-components";
import RightArrowIcon from "../Images/icon/l_arrow.svg";
import LeftArrowIcon from "../Images/icon/R_arrow.svg";
import MoreDetailIcon from "../Images/icon/moreIcon.svg";
import ProductImg from "../Images/example_product.svg";
import PandaImg from "../Images/Panda_purple.svg";
import PlusBtnIcon from "../Images/icon/plus.svg";
import SendBtnIcon from "../Images/icon/big_arrow.svg";

function ChatDetailPage() {
  return (
    <Container>
      <Header>
        <BackBtn>
          <img src={RightArrowIcon} alt="뒤로가기" />
        </BackBtn>
        <UserInfo>
          <Title>하양이</Title>
          <UserType>판매자</UserType>
        </UserInfo>
        <MoreBtn>
          <img src={MoreDetailIcon} alt="자세히 보기" />
        </MoreBtn>
      </Header>
      <SideAlarmCont>
        <img src={ProductImg} alt="제품 이미지" className="product-img" />
        <SideAlarmText>
          <p>
            <Brand>[스타벅스]</Brand>
            <Product>까페라테</Product>
            <Size>Tall</Size>
          </p>
          <p>
            <SellingPriceText>판매가</SellingPriceText>
            <SellingPrice>3280원</SellingPrice>
            <ConfirmOrder>구매 확정 완료(완)</ConfirmOrder>
          </p>
        </SideAlarmText>
        <img src={LeftArrowIcon} alt="자세히 보러가기" className="left-arrow" />
      </SideAlarmCont>
      <ChatDetailCont>
        <ChatList>
          <ChatItem>
            <ProfileImgCont>
              <img src={PandaImg} alt="판다 이미지" />
            </ProfileImgCont>
            <TextCont>
              <TextHeader>
                <ProfileName>판다콘 고객센터</ProfileName>
                <PostDate>2021-01-04 10:22:48</PostDate>
              </TextHeader>
              <ChatContentCont>
                <ChatContentTitle>구매완료</ChatContentTitle>
                <ChatContent>
                  판매자를 위해 쿠폰 사용 직후 바로 구매확정 부탁드리며 문제가
                  있다면 3일 뒤 자동으로 구매확정되기 전에 환불을 요청하세요.
                </ChatContent>
                <ChatContent>
                  '장터 안전거래 관리' 버튼을 탭 하면 환불요청 및 구매확정을 할
                  수 있습니다.
                </ChatContent>
              </ChatContentCont>
            </TextCont>
          </ChatItem>
          <ChatItem>
            <ProfileImgCont>
              <img src={PandaImg} alt="판다 이미지" />
            </ProfileImgCont>
            <TextCont>
              <TextHeader>
                <ProfileName>판다콘 고객센터</ProfileName>
                <PostDate>2021-01-04 10:22:48</PostDate>
              </TextHeader>
              <ChatContentCont>
                <ChatContentTitle>구매완료</ChatContentTitle>
                <ChatContent>
                  판매자를 위해 쿠폰 사용 직후 바로 구매확정 부탁드리며 문제가
                  있다면 3일 뒤 자동으로 구매확정되기 전에 환불을 요청하세요.
                </ChatContent>
                <ChatContent>
                  '장터 안전거래 관리' 버튼을 탭 하면 환불요청 및 구매확정을 할
                  수 있습니다.
                </ChatContent>
              </ChatContentCont>
            </TextCont>
          </ChatItem>
          <ChatItem>
            <ProfileImgCont>
              <img src={PandaImg} alt="판다 이미지" />
            </ProfileImgCont>
            <TextCont>
              <TextHeader>
                <ProfileName>판다콘 고객센터</ProfileName>
                <PostDate>2021-01-04 10:22:48</PostDate>
              </TextHeader>
              <ChatContentCont>
                <ChatContentTitle>구매 확정 완료</ChatContentTitle>
                <ChatContent>
                  판매자에게 결제 개금을 지급하였습니다.
                </ChatContent>
                <ChatContent>
                  마일리지 이용내역은 나의 메뉴 {">"} 마일리지/캐시 이용내역에서
                  확인할 수 있습니다.
                </ChatContent>
              </ChatContentCont>
            </TextCont>
          </ChatItem>
        </ChatList>
      </ChatDetailCont>
      <MessageCont>
        <PlusBtn type="button">
          <img src={PlusBtnIcon} alt="추가 버튼" />
        </PlusBtn>
        <MessageInp type="text" placeholder="메시지를 입력하세요" size="35" />
        <SendBtn type="submit">
          <img src={SendBtnIcon} alt="메세지 보내기 버튼" />
        </SendBtn>
      </MessageCont>
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
  padding: 20px 15px 8px 15px;
  box-sizing: border-box;
  width: 100%;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  position: absolute;
  left: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;

const UserType = styled.small`
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
  -webkit-text-size-adjust: none;
`;

const MoreBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  position: absolute;
  right: 24px;
`;

const SideAlarmCont = styled.div`
  position: relative;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 63px;
  background-color: #f6f6f6;
  .left-arrow {
    position: absolute;
    right: 22px;
  }
`;

const SideAlarmText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 16px;
`;

const Brand = styled.small`
  font-size: 9px;
  font-weight: 300;
  margin-right: 3px;
`;
const Product = styled.small`
  font-size: 9px;
  font-weight: 300;
  margin-right: 3px;
`;
const Size = styled.small`
  font-size: 9px;
  font-weight: 300;
`;

const SellingPriceText = styled.small`
  font-size: 10px;
  font-weight: 400;
  margin-right: 3px;
`;

const SellingPrice = styled.small`
  font-size: 9px;
  font-weight: 300;
  margin-right: 3px;
`;
const ConfirmOrder = styled.small`
  font-size: 9px;
  color: #6b0090;
`;

const ChatDetailCont = styled.main`
  padding: 25px 21px;
`;

const ChatList = styled.ul`
  width: 100%;
`;

const ChatItem = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 19px;
`;

const ProfileImgCont = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #621c81;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 10px;
`;

const TextHeader = styled.p`
  display: flex;
  margin-bottom: 4px;
`;

const ProfileName = styled.strong`
  font-weight: 600;
  font-size: 12px;
`;

const PostDate = styled.small`
  -webkit-transform: scale(0.83);
  font-size: 8px;
  font-weight: 300;
`;

const ChatContentCont = styled.div`
  padding: 18px 13px;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  width: 249px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChatContentTitle = styled.strong`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ChatContent = styled.small`
  font-size: 10px;
  color: #5b5b5b;
  margin-bottom: 3px;
  &::before {
    content: "·";
    margin-left: 10px;
    position: absolute;
    left: -1px;
  }
`;

const MessageCont = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  height: 61px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-top: 1px solid #e4e4e4;
`;

const PlusBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  margin-right: 15px;
`;
const SendBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: fit-content;
  margin-left: 8px;
`;

const MessageInp = styled.input`
  border: none;
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
  }
  &:focus {
    outline: none;
  }
`;

export default ChatDetailPage;
