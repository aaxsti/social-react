import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import working from "../../../assets/images/working.png";
import noPhotoPic from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img alt='' src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>

                {profile.photos.large != null ?
                    <img src={profile.photos.large}/>
                    : <img src={noPhotoPic} className={s.noPhotoPic}/>}

                <div className={s.profileInfo}>

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    <h3>Contacts:</h3>
                    <ul className={s.infoList}>
                        <li>Facebook: {profile.contacts.facebook}</li>
                        <li>VK: {profile.contacts.vk}</li>
                        <li>Twitter: {profile.contacts.twitter}</li>
                        <li>Instagram: {profile.contacts.instagram}</li>
                        <li>Github: {profile.contacts.github}</li>
                    </ul>
                    <h3>Job:</h3>
                    <ul className={s.infoList}>
                        <li>Full name: {profile.fullName}</li>
                        <li>Job: {profile.lookingForAJob ?
                            <img src={working} className={s.workingImage}/> : null}</li>
                        <li>Job preferences: {profile.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default ProfileInfo;