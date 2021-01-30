import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
ul {
    list-style: none;
  }
  button,
  input,
  select,
  textarea {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
    text-align: left;
  }
  /* Custom globals */
  html {
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
       -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
            text-size-adjust: 100%;
  }
  body {
    background-color: #f7f8fa;
  }
  body, button, input, select, textarea {
    font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
  }
  
  /* Root */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    width: 100%;
  }
`;

export default GlobalStyles;
