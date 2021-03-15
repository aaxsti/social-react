import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../types/types";

type PropsType = {
    posts: Array<PostType>
    addPost: (value: string) => void

}

const MyPosts: FC<PropsType> = ({posts, addPost}) => {

    let postsElements = posts.map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let addNewPost = (values: any) => {
        addPost(values.newPostText);
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