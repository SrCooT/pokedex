import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass"

  }
 #root{
  background: rgb(161,157,219);
background: linear-gradient(90deg, rgba(161,157,219,1) 13%, rgba(112,142,215,1) 49%, rgba(55,181,207,1) 100%);
  }

    h1{
        color: black;
    }
`;
