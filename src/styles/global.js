import { createGlobalStyle } from 'styled-components';
import { colors }  from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${colors.white};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: ${colors.black};
    font-size: 14px;
    font-family: "Roboto";
  }

  button {
    cursor: pointer;
    outline: none;
  }
`;