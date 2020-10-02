import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Stas'},
        {id: 5, name: 'Sasha'},
    ];

    let messagesData = [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Ку!'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
            </div>
        </div>
    )
};

export default Dialogs;

