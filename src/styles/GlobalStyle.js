import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import './fonts.css'

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    background-color: #CCCCCC;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
