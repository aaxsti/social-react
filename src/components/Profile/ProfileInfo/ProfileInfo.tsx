import React, {ChangeEvent, FC, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import noPhotoPic from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";
import {Avatar, Button, Col, Image, Row, Upload} from "antd";
import BelarusFlag from './../../../assets/images/belarus.svg'
import {EditOutlined, MessageOutlined, UploadOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files.length) {
            console.log(e.target.files[0])
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
            <div className={s.descriptionBlock}>
                <div className={s.backgroundPicture}>
                    <Row>
                        <Col md={{span: 5, offset: 2}}>
                            <Avatar
                                className={s.profileImage}
                                size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 150}}
                                src={<Image src={profile.photos.large || noPhotoPic}/>}
                            />,
                        </Col>
                        <Col md={{span: 7}}>
                            <div className={s.profileName}>{profile.fullName}</div>
                            <div className={s.profileLocation}>Беларусь &nbsp;<img className={s.countryFlag}
                                                                                   src={BelarusFlag}
                                                                                   alt={'country flag'}/></div>
                            <div className={s.profileLocation}>Гомель</div>
                            <div className={s.profileFriends}>9 друзей</div>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        </Col>
                    </Row>
                </div>

                {/*{isOwner &&*/}
                {/*<input type='file' onChange={onMainPhotoSelected} className={s.inputPhotoButton}/>*/}
                {/*}*/}

                <div style={{paddingTop: '15px'}}>
                    {isOwner && <Upload onChange={() => {
                    }} accept={'image/*'} className={s.inputPhotoButton}>
                        <Button icon={<UploadOutlined/>}>Обновить фотографию</Button>
                    </Upload>}
                </div>

                <br/>
                <div className={s.profileInfo}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                            setEditMode(true)
                        }}/>}
                </div>
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner ?
                <Row style={{padding: '20px 0 0 15px'}}>
                    <Button onClick={goToEditMode}><EditOutlined /> Редактировать профиль</Button>
                </Row> : null}
            {!isOwner ?
                <Row style={{padding: '20px 0 0 15px'}}>
                    <Button><NavLink to={'/chat'}><MessageOutlined /> Написать сообщение</NavLink></Button>
                </Row> : null}
            <div className={s.profileInfoFull}>
                <Col>
                    <Row>
                        <span>Дата рождения:&nbsp;</span> 21.06.2000
                    </Row>
                    <Row>
                        <span>Ищу работу: </span>
                        <span>{profile.lookingForAJob ? "Да" : "Нет"}</span>
                    </Row>
                    {profile.lookingForAJob &&
                    <Col>
                        <span>Профессиональные навыки:</span> {profile.lookingForAJobDescription}
                    </Col>
                    }
                    <Col>
                        <span>Общая информация:</span> {profile.aboutMe}
                    </Col>
                    <Row>
                        <span>Контакты:</span>
                    </Row>
                    <Row className={s.contact}>
                        <span>Мобильный телефон:&nbsp;</span> +375 (33) 355-29-71
                    </Row>
                    <Col>
                        {
                            Object
                                .keys(profile.contacts)
                                .map((key) => {
                                    return <Contact key={key} contactTitle={key}
                                                    contactValue={profile.contacts[key as keyof ContactsType]}/>
                                })}
                    </Col>
                </Col>
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
        <Row className={s.contact}>
            <span>{contactTitle}: &nbsp;</span><a style={{float: 'right'}} href={contactValue}>{contactValue}</a>
        </Row>
    )
}

export default ProfileInfo;