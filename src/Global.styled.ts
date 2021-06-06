import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    box-sizing: content-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: thin;       
    scrollbar-color: #a3cfff #dadcdf;
  }
`