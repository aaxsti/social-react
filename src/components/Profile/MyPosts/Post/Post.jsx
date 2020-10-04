import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img alt ='' src='https://picsum.photos/100/100'/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
        </div>
    )
};

export default Post;


