import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    //debugger;
    let friendElements = props.friends.map((f) => <Friend name={f.name} imgLink={f.imgLink}/>);

    return (
        <nav className={s.friends}>
            Friends
            {friendElements}
        </nav>
    )
};

export default Friends;