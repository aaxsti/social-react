import React, {useState, FC, ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import noPhotoPic from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType>= ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img alt='' src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>

                <img src={profile.photos.large || noPhotoPic} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={s.inputPhotoButton}/>}

                <br/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType>= ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.profileInfo}>
            {isOwner ? <div>
                <button onClick={goToEditMode}>Edit</button>
            </div> : null}
            <div>
                <div>
                    <b>Full name</b> {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b> {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me:</b> {profile.aboutMe}
                </div>
                <div>
                    <b>Contacts</b> {
                    Object
                        .keys(profile.contacts)
                        .map((key) => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                })}
                </div>
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}


const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileInfo;