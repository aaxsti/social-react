import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import {Provider} from "react-redux";
import store from "./redux/store/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Global} from "./Global.styled";

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));