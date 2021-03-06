import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import Preloader from "../../../common/Preloader/Preloader";
import noPhotoPic from "../../../../assets/images/user.png";
import ProfileDataForm from "../../../forms/ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../../types/types";
import {Button, Col, Row} from "antd";
import {CloseOutlined, EditOutlined, MessageOutlined, UploadOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileStatus} from "../../../../selectors/profile-selectors";
import {selectUserFriendsAmount} from "../../../../selectors/friends-selectors";
import {savePhoto, saveProfile} from "../../../../redux/profile-reducer";
import ProfileAdditionalData from "./ProfileAdditionalData/ProfileAdditionalData";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {
    AvatarImage,
    AvatarImageWrapperCol,
    FriendsAmountBlock,
    FriendsAmountLink,
    HiddenUploadInput,
    MainInfoNameRow,
    MainInfoRow,
    MainProfileDataFields,
    MainProfileDataFieldValues,
    ProfileButtons,
    ProfileEditButton,
    UserName
} from './ProfileInfo.styled';
import {startDialog} from "../../../../redux/dialogs-reducer";
import {requestFriends} from "../../../../redux/friends-reducer";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    userId: number
}

const ProfileInfo: FC<PropsType> = ({isOwner, profile, userId}) => {

    let [editMode, setEditMode] = useState<boolean>(false);

    const status = useSelector(selectProfileStatus)
    const friendsAmount = useSelector(selectUserFriendsAmount)

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestFriends());
    }, [dispatch])

    const handleCreateDialog = () => {
        dispatch(startDialog(userId))
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]));
        }
    }

    const handleClick = () => {
        hiddenFileInput?.current?.click();
    }

    const onSubmit = (formData: ProfileType) => {
        dispatch(saveProfile(formData))
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            <Row>
                <AvatarImageWrapperCol>
                    <AvatarImage src={profile.photos.large || noPhotoPic}/>
                </AvatarImageWrapperCol>
                <Col>
                    <UserName title={profile.fullName} subTitle={'Беларусь, Гомель'}/>
                    <ProfileStatus status={status} isOwner={isOwner}/>
                    <FriendsAmountBlock>
                        {isOwner ?
                            <FriendsAmountLink to={'/friends'}>
                            <span>
                                Друзей:&nbsp;
                            </span>
                                <span>
                                {friendsAmount}
                            </span>
                            </FriendsAmountLink>
                            : null
                        }
                    </FriendsAmountBlock>
                    <MainProfileDataFields>
                        <Row>
                            <Col>
                                <MainInfoNameRow>
                                    Телефон:
                                </MainInfoNameRow>
                                <MainInfoNameRow>
                                    Дата рождения:
                                </MainInfoNameRow>
                                <MainInfoNameRow>
                                    О себе:
                                </MainInfoNameRow>
                            </Col>
                            <MainProfileDataFieldValues>
                                <MainInfoRow>
                                    +375 (33) 355-29-71
                                </MainInfoRow>
                                <MainInfoRow>
                                    21 июня 2000
                                </MainInfoRow>
                                <MainInfoRow>
                                    {profile.aboutMe && profile.aboutMe.length >= 50
                                        ? `${profile.aboutMe.slice(0, 50)}...` : profile.aboutMe}
                                </MainInfoRow>
                            </MainProfileDataFieldValues>
                        </Row>
                    </MainProfileDataFields>
                </Col>
            </Row>
            <ProfileButtons>
                <Col>
                    {isOwner ?
                        <>
                            <Button icon={<UploadOutlined/>} onClick={handleClick}>
                                Обновить фотографию
                            </Button>
                            <HiddenUploadInput type='file' ref={hiddenFileInput} onChange={onMainPhotoSelected}/>
                        </>
                        :
                        <Button onClick={handleCreateDialog}>
                            <NavLink to={'/dialogs'}>
                                <MessageOutlined/> Написать сообщение
                            </NavLink>
                        </Button>
                    }
                </Col>
                <ProfileEditButton>
                    {isOwner ?
                        <Row>
                            <Button
                                onClick={
                                    () => {
                                        editMode ? setEditMode(false) : setEditMode(true)
                                    }
                                }>
                                {editMode
                                    ? <div><CloseOutlined/> Выйти из режима редактирования</div>
                                    : <div><EditOutlined/> Редактировать профиль</div>
                                }

                            </Button>
                        </Row> : null}
                </ProfileEditButton>
            </ProfileButtons>
            <br/>
            <div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileAdditionalData profile={profile}/>}
            </div>
        </>
    )
};

export default React.memo(ProfileInfo);