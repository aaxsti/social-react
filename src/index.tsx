import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store/redux-store";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
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

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));