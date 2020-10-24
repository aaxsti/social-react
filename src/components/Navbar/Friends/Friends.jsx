import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElements = props.friends.map((f) => <Friend name={f.name} key={f.id} imgLink={f.imgLink}/>);

    return (
        <nav className={s.friends}>
            Friends

            {friendElements}
        </nav>
    )
};

export default Friends;