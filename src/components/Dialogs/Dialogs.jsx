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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Maxim" id="1"/>
                <DialogItem name="Ilya" id="2"/>
                <DialogItem name="Ivan" id="3"/>
                <DialogItem name="Stas" id="4"/>
                <DialogItem name="Sasha" id="5"/>
            </div>
            <div className={s.messages}>
                <MessageItem message="Hi"/>
                <MessageItem message="How are you?"/>
                <MessageItem message="Yo!"/>
            </div>
        </div>
    )
};

export default Dialogs;

