import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://kursor.kiev.ua/images/icons/teacher_woman.png'/>
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
};

export default Post;


