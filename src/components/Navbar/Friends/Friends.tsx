import React, {FC} from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import {FriendType} from "../../../types/types";

type PropsType = {
    friends: Array<FriendType>
}

const Friends: FC<PropsType> = ({friends}) => {
    let friendElements = friends.map((f) => <Friend name={f.name} key={f.id} imgLink={f.imgLink}/>);

    return (
        <nav className={s.friends}>
            Friends

            {friendElements}
        </nav>
    )
};

export default Friends;