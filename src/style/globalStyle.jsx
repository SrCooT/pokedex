import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass";
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg);
    color: var(--color-text-primary);
  }

  :root {
    --color-bg-dark: rgb(161, 157, 219);
    --color-text-primary-dark: #000;
    
    --color-bg-white: rgb(13, 157, 255);
    --color-text-primary-white: #FFF;
  }

  h1 {
    color: var(--color-text-primary);
  }

  .dark {
    --color-bg: var(--color-bg-dark);
    --color-text-primary: var(--color-text-primary-dark);
  }

  .white {
    --color-bg: var(--color-bg-white);
    --color-text-primary: var(--color-text-primary-white);
  }
`