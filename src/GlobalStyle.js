import { createGlobalStyle } from "styled-components";
import img from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  background-image: url(${img});  
  background-size: cover;
  background-position: center;
  background-blend-mode: luminosity;
  background-color: ${({ theme }) => theme.colors.background};
  background-attachment: fixed;
  font-size: large;
  display: flex;
  justify-content: center;
  min-width: fit-content;
}
`;