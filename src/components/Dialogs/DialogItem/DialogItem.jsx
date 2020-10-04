import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const  DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img alt='' src={props.imgLink}/>
            <NavLink to={path} className={s.dialogName} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;