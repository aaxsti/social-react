import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img alt='' src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>
            </div>
            <div>
                Avatar + description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;


