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

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map((m) => <MessageItem message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;

