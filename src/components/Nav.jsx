import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav_panda from "../Images/icon/nav_panda.svg";
import Mypage from "../Images/icon/mypage.svg";
import Chatting from "../Images/icon/chatting.svg";
import Search from "../Images/icon/search.svg";
import Save from "../Images/icon/save.svg";

const Nav = () => {
  return (
        <NavBar>
          <Navul>
            <li>
              <NavLink to='/'>
                <img src={Save} alt="Save" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <img src={Search} alt="Search" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <img src={Nav_panda} alt="Navpanda" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <img src={Chatting} alt="Chatting" />
              </NavLink>
            </li>
            <li>
              <NavLink to='/'>
                <img src={Mypage} alt="Mypage" />
              </NavLink>
            </li>
          </Navul>
        </NavBar>
  );
};

const NavBar = styled.nav`
  position: absolute;
  height: 60px;
  background-color: #fff;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Navul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 17px;
  border-top: 1px solid rgba(136, 136, 136, 0.45);
`;

export default Nav;
