import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message='Привет, как дела?' likesCount='25'/>
                <Post message='Это мой первый пост!' likesCount='15'/>
            </div>
        </div>
    )
};

export default MyPosts;


