import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";


const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}




export default MyPosts;