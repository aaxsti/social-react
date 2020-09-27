import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>
            </div>
            <div>
                Avatar + description
            </div>
            <div className={s.posts}>
                My posts
                <div>
                    New post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
};

export default Profile;