import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 ;
    background-color: #2ec4b6;
  }

  #root{
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
  }
`;

export default GlobalStyle;
