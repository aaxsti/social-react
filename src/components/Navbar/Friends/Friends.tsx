import React, {FC} from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {}

const Friends: FC<PropsType> = (props) => {

    const friends = useSelector((state: AppStateType) => state.sidebar.friends)

    let friendElements = friends.map((f) => <Friend name={f.name} key={f.id} imgLink={f.imgLink}/>);

    return (
        <nav className={s.friends}>
            Friends

            {friendElements}
        </nav>
    )
};

export default Friends;