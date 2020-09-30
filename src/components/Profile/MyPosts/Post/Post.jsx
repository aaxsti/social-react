import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://kursor.kiev.ua/images/icons/teacher_woman.png'/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
        </div>
    )
};

export default Post;


