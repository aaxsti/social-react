import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message='Привет, как дела?' likesCount='25'/>
                <Post message='Это мой первый пост!' likesCount='15'/>
            </div>
        </div>
    )
};

export default MyPosts;


