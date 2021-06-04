import React, {FC} from 'react';
import Post from "./Post";
import AddNewPostForm, {AddPostFormValuesType} from "../../forms/AddNewPostForm/AddNewPostForm";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileImage, selectProfilePosts} from "../../../selectors/profile-selectors";
import {actions} from "../../../redux/profile-reducer";
import {Divider} from "antd";

type PropsType = {}

const ProfilePosts: FC<PropsType> = () => {
    const posts = useSelector(selectProfilePosts)
    const profileImage = useSelector(selectProfileImage)

    const dispatch = useDispatch()

    let postsElements = posts.reverse().map((p) => <Post profileImage={profileImage} message={p.message} key={p.id} id={p.id} likesCount={p.likesCount} date={p.date}/>);

    let addNewPost = (values: AddPostFormValuesType) => {
        dispatch(actions.addPostActionCreator(values.newPostText));
    };

    return (
        <div>
            <Divider style={{marginBottom: 7}}/>
            <h3 style={{paddingTop: 10}}>
                Мои записи
            </h3>
            <AddNewPostForm onSubmit={addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(ProfilePosts)

export default MyPostsMemorized