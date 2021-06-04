import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import noPhotoPic from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "../../forms/ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../types/types";
import {Button, Col, Image, PageHeader, Row} from "antd";
import {CloseOutlined, EditOutlined, MessageOutlined, UploadOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestFriends} from "../../../redux/friends-reducer";
import {selectProfileStatus} from "../../../selectors/profile-selectors";
import {selectUserFriendsAmount} from "../../../selectors/friends-selectors";
import {savePhoto, saveProfile} from "../../../redux/profile-reducer";
import styled from 'styled-components';
import ProfileAdditionalData from "./ProfileAdditionalData";

const ProfileInfoWrapper = styled.div`
  //border: 1px black solid;
`
const AvatarImage = styled(Image)`
  width: 200px;
  max-width: 100%;
  border-radius: 2px;
`
const AvatarImageWrapperCol = styled(Col)`
  padding-right: 50px;
`
const UserName = styled(PageHeader)`
  margin: 0;
  padding: 2px 0 0 0;
  border-bottom: 2px gray solid;
`
const MainInfoNameRow = styled(Row)`
  color: gray;
  font-size: 15px;
`
const MainInfoRow = styled(Row)`
  color: #416a92;
  font-size: 15px;
`

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
}

const ProfileInfo: FC<PropsType> = ({isOwner, profile}) => {
    let [editMode, setEditMode] = useState(false);

    const status = useSelector(selectProfileStatus)
    const friendsAmount = useSelector(selectUserFriendsAmount)

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestFriends());
    }, [])

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
        <ProfileInfoWrapper>
            <Row>
                <AvatarImageWrapperCol>
                    <AvatarImage src={profile.photos.large || noPhotoPic}/>
                </AvatarImageWrapperCol>
                <Col>

                    <UserName title={profile.fullName} subTitle={'Беларусь, Гомель'}/>

                    <ProfileStatusWithHooks status={status} isOwner={isOwner}/>

                    <div style={{paddingTop: 7, fontSize: 15}}>
                        {isOwner ?
                            <NavLink to={'/friends'} style={{color: '#06162a'}}>
                            <span style={{color: 'gray'}}>
                                Друзей:&nbsp;
                            </span>
                                <span>
                                {friendsAmount}
                            </span>
                            </NavLink>
                            : null
                        }
                    </div>
                    <div style={{paddingTop: 9}}>
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
                            <Col style={{paddingLeft: 15}}>
                                <MainInfoRow>
                                    +375 (33) 355-29-71
                                </MainInfoRow>
                                <MainInfoRow>
                                    21 июня 2000
                                </MainInfoRow>
                                <MainInfoRow>
                                    {profile.aboutMe && profile.aboutMe.length >= 50 ? `${profile.aboutMe.slice(0, 50)}...` : profile.aboutMe}
                                </MainInfoRow>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            {/*todo: photo change*/}
            {/*{isOwner &&*/}
            {/*<input type='file' onChange={onMainPhotoSelected}/>*/}
            {/*}*/}

            <Row style={{paddingTop: '15px'}}>
                <Col>
                    {isOwner ?
                        <>
                            <Button icon={<UploadOutlined/>} onClick={handleClick}>
                                Обновить фотографию
                            </Button>
                            <input type='file' style={{display: 'none'}} ref={hiddenFileInput} onChange={onMainPhotoSelected}/>
                        </>

                        :
                        <Button>
                            <NavLink to={'/chat'}>
                                <MessageOutlined/> Написать сообщение
                            </NavLink>
                        </Button>
                    }
                </Col>
                <Col style={{paddingLeft: 47}}>
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
                </Col>
            </Row>

            <br/>
            <div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileAdditionalData profile={profile}/>}
            </div>
        </ProfileInfoWrapper>
    )
};

export default ProfileInfo;