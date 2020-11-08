import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import working from "../../../assets/images/working.png";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt='' src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h3>My contacts:</h3>
                <ul className={s.infoList}>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                    <li>Twitter: {props.profile.contacts.twitter}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>Github: {props.profile.contacts.github}</li>
                    <li></li>
                </ul>
                <h3>Job:</h3>
                <ul className={s.infoList}>
                    <li>Full name: {props.profile.fullName}</li>
                    <li>Job: {props.profile.lookingForAJob ? <img src={working} className={s.workingImage}/> : null}</li>
                    <li>Job preferences: {props.profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    )
};


export default ProfileInfo;