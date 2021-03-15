import React, {FC} from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    imgLink: string
    name: string
}

const  DialogItem: FC<PropsType> = ({id, imgLink, name, ...props}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={s.dialog}>
            <img alt='' src={imgLink}/>
            <NavLink to={path} className={s.dialogName} activeClassName={s.activeLink}>{name}</NavLink>
        </div>
    )
};

export default DialogItem;