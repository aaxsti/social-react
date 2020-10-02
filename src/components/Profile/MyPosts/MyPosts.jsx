import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Привет, как дела?', likesCount: 25},
        {id: 2, message: 'Это мой первый пост', likesCount: 15},
        {id: 3, message: 'куку', likesCount: 15},
        {id: 4, message: 'вап', likesCount: 15},
    ];

    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;


