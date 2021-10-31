import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  // defines what 1rem is
  font-size: 62.5%; // 1rem = 10px
  height: 100%;


  /* @include respond(mini-mobile) {
    font-size: 55%;
  } */
}
body {
  box-sizing: border-box;
  background-color: white;
  height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  font-family: "Montserrat", sans-serif;
  background:${({theme}) => theme.colorPrimary};
}

`;
