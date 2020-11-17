import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import working from "../../../assets/images/working.png";
import ProfileStatus from "./ProfileStatus"
import noPhotoPic from "../../../assets/images/user.png";


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

                {/*{   props.profile.photos.large != null ?*/}
                {/*    <img src={props.profile.photos.large}/>*/}
                {/*    : <img src={noPhotoPic} className={s.noPhotoPic}/> }*/}

                <div className={s.profileInfo}>

                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                    <h3>My contacts:</h3>
                    <ul className={s.infoList}>
                        <li>Facebook: {props.profile.contacts.facebook}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>Twitter: {props.profile.contacts.twitter}</li>
                        <li>Instagram: {props.profile.contacts.instagram}</li>
                        <li>Github: {props.profile.contacts.github}</li>
                    </ul>
                    <h3>Job:</h3>
                    <ul className={s.infoList}>
                        <li>Full name: {props.profile.fullName}</li>
                        <li>Job: {props.profile.lookingForAJob ?
                            <img src={working} className={s.workingImage}/> : null}</li>
                        <li>Job preferences: {props.profile.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default ProfileInfo;