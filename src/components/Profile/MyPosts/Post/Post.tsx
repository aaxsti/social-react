import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img alt ='' src='https://picsum.photos/100/100'/>
                {message}
                <div>
                    <span>{likesCount} likes</span>
                </div>
            </div>
        </div>
    )
};

export default Post;


