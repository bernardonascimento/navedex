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

    /* --secondary: #15181C; */
    /* --search: #202327; */
    /* --outline: #2F3336; */
    /* --retweet: #00C06B; */
    /* --like: #E8265E; */
    /* --twitter: #33A1F2; */
    /* --twitter-dark-hover: #011017; */
    /* --twitter-light-hover: #2C8ED6; */
  }
`;
