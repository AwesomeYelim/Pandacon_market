import React from "react";
import styled from "styled-components";
import Sampleimg from "../Images/sample_wish.svg";
import Save_c from "../Images/icon/save_c.svg";

const Wishitem = () => {
  return (
      <Wishcontent>
        <Wishimage>
          <img src={Sampleimg} alt="" />
        </Wishimage>
        <div className="WishDesc">
          <Wishbrand>
            <p>스타벅스</p>
            <span>카페라떼</span>
          </Wishbrand>
          <Saveimg>
            <img src={Save_c} alt="" />
          </Saveimg>
          <Wishprice>
            <strong>14 %</strong>
            <WishpriceDesc>
              <Disprice>
                3,950원
              </Disprice>
              <Normalprice>
                4,600원
              </Normalprice>
            </WishpriceDesc>
            <span>~22. 09. 19</span>
          </Wishprice>
        </div>
      </Wishcontent>
  );
};

const Wishcontent = styled.div`
  position: relative;
  display: flex;
  margin: 0 10px;
  width: 340px;
  height: 94px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Wishbrand = styled.div`
  margin: 17px 0 17px 50px;
  & p {
    font-size: 10px;
    font-weight: 300;
    padding-left: 5px;
    color: #bfbfbf;
  }

  & span {
    font-size: 15px;
    font-weight: 300;
    color: #909090;
  }
`;

const Wishimage = styled.div`
  & img {
    padding: 15px 0 13px 35px;
  }
`;

const Saveimg = styled.div`
  position: absolute;
  top: 22px;
  right: 16px;
  cursor: pointer;
`;

const Wishprice = styled.div`
  display: flex;
  align-items: flex-end;

  & strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 18px;
    margin-left: 50px;
    background-color: #6b0090;
    border-radius: 2px;
    font-size: 11px;
    letter-spacing: -0.04em;
    color: #fff;
  }

  & span {
    margin-left: 16px;
    font-size: 10px;
    font-weight: 300;
    color: #7b7b7b;
  }
`;

const WishpriceDesc = styled.div`
  position: relative;
`;

const Disprice = styled.p`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #515151;
  letter-spacing: -0.04em;
`;

const Normalprice = styled.p`
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 7px;
  font-weight: 300;
  letter-spacing: -0.03em;
  color: #bfbfbf;
  text-decoration-line: line-through;
`;

export default Wishitem;
