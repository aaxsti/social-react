import React from 'react';
import s from './Friend.module.css'


const Friend = (props) => {
    return (
        <nav className={s.friends}>
            <img alt='' src={props.imgLink}/>
            {props.name}

        </nav>
    )
};

export default Friend;