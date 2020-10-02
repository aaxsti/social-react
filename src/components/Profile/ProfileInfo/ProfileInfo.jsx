import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='' src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    )
};

export default ProfileInfo;


