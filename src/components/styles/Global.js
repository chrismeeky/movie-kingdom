import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap');
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

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
input {
     border-radius: 0;
}

`;
