import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Привет, как дела?', likesCount: 25},
    {id: 2, message: 'Это мой первый пост', likesCount: 15},
    {id: 3, message: 'куку', likesCount: 15},
    {id: 4, message: 'вап', likesCount: 15},
];

let dialogs = [
    {id: 1, name: 'Maxim'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Stas'},
    {id: 5, name: 'Sasha'},
];

let messages = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Ку!'},
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} messages={messages} dialogs={dialogs}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
