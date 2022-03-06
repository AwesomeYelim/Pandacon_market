import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Search from "../Images/icon/search.svg";
import Recentx from "../Images/icon/recentx.svg"

function SearchPage(props) {
  const onChange = (e) => {
    props.onUserInput(e.target.value);
  };

  return (
    <Container>
      <Inputcontainer>
        <Inputheader>
          <Searchbar>
            <Inputfield>
                <input type="text"
                onChange={onChange}
                value={props.data} 
                maxLength="10"/>
            </Inputfield>
            <img src={Search} alt="SearchImg" />
          </Searchbar>
          <p>취소</p>
        </Inputheader>
        <Inputsearched>
          <Recentsearched>최근 검색어</Recentsearched>
          <Searchedcontainer>
            <Searcheditem>
              <p>스타벅스</p>
              <img src={Recentx} alt="RecentxButton" />
            </Searcheditem>
            <Searcheditem>
              <p>투썸</p>
              <img src={Recentx} alt="RecentxButton" />
            </Searcheditem>
          </Searchedcontainer>
        </Inputsearched>
        <Searcheddelete>
            전체 삭제
        </Searcheddelete>
      </Inputcontainer>
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

const Inputcontainer = styled.div`
  margin-left: 32px;
`;

const Inputheader = styled.div`
  display: flex;
  height: 90px;

  p {
    font-size: 17px;
    font-weight: 300;
    margin-top: 45px;
    color: #747474;
    cursor: pointer;
  }
`;

const Searchbar = styled.div`
  position: relative;
  margin: 36px 19px 0 0;

  img {
    position: absolute;
    top: 11px;
    left: 14px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

const Inputfield = styled.div`
    width: 240px;
    height: 37px;
    background-color: #eeeeee;
    border-radius: 5px;

    input {
        background-color: #eeeeee;
        border: none;
        padding: 10px 0 0 37px;
    }

    input:focus {
    outline: none;
  }
`

const Inputsearched = styled.div`
  &::after {
    content: "";
    display: block;
    width: 296px;
    border-bottom: 1px solid #747474;
    margin: 10px 0 10px 0;
  }
`;

const Recentsearched = styled.p`
  font-size: 11px;
  font-weight: 300;
  color: #747474;
`;

const Searchedcontainer = styled.div`
  display: flex;
`;

const Searcheditem = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 300;
  background-color: #f8f8f8;
  color: #747474;
  margin: 10px 10px 10px 0;
  padding: 10px 42px 10px 20px;

  img {
    position: absolute;
    top: 10.5px;
    right: 12px;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
`;

const Searcheddelete = styled.p`
    text-align: right;
    font-size: 11px;
    font-weight: 300;
    color: #747474;
    padding-right: 32px;
`

export default SearchPage;
