import React, {FC} from 'react';
import Post from "./Post/Post";
import AddNewPostForm, {AddPostFormValuesType} from "../../forms/AddNewPostForm/AddNewPostForm";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileImage, selectProfilePosts} from "../../../selectors/profile-selectors";
import {actions} from "../../../redux/profile-reducer";
import {MyPostsHeader, StyledDivider } from './ProfilePosts.styled';
import {List} from "antd";

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октябля", "Ноября", "Декабря"];

const ProfilePosts: FC = () => {
    const posts = useSelector(selectProfilePosts)
    const profileImage = useSelector(selectProfileImage)

    const dispatch = useDispatch()

    let postsElements = posts.reverse()
        .map((p) => <Post
        months={months}
        profileImage={profileImage}
        message={p.message}
        key={p.id}
        id={p.id}
        likesCount={p.likesCount}
        date={p.date}
    />);

    let addNewPost = (values: AddPostFormValuesType) => {
        dispatch(actions.addPostActionCreator(values.newPostText));
    };

    return (
        <>
            <StyledDivider/>
            <MyPostsHeader>
                Мои записи
            </MyPostsHeader>
            <AddNewPostForm onSubmit={addNewPost}/>
            <List size={'large'}>
                {postsElements}
            </List>
        </>
    )
}

const MyPostsMemorized = React.memo(ProfilePosts)

export default MyPostsMemorized