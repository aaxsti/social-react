import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import AddNewPostForm, {AddPostFormValuesType} from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = ({posts, addPost}) => {

    let postsElements = posts.reverse().map((p) => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

    let addNewPost = (values: AddPostFormValuesType) => {
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

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized