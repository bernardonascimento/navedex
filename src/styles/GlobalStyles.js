import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--gray);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #FFFFFF;
    --gray: #212121;
    --placeholder: #9E9E9E;
  }
`;
