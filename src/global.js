import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    background-color: lightgray;
    background-size: 400% 400%;
    background-position: var(--bg-position);
    transition: background-position 2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .separator::before {
    content: '•';
    color: white;
    padding: 0.4rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: purple;
  }

  a:active {
    color: blueviolet;
  }
`;

export default GlobalStyles;

