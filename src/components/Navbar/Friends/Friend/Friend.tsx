import React, {FC} from 'react';
import s from './Friend.module.css'

type PropsType = {
    imgLink: string
    name: string
}

const Friend: FC<PropsType> = ({imgLink, name}) => {
    return (
        <nav className={s.friends}>
            <img alt='' src={imgLink}/>
            {name}
        </nav>
    )
};

export default Friend;