import React, {FC} from "react";
import {Col, Divider, Row} from "antd";
import {ContactsType, ProfileType} from "../../../types/types";

const ProfileAdditionalData: FC<ProfileAdditionalDataPropsType> = ({profile}) => {
    return (
        <div>
            <Divider style={{marginBottom: 7, marginTop: 3}}/>
            <div style={{display: 'inline-block'}}>
                <Row>
                    <Col>
                        <div style={{borderBottom: '2px gray solid'}}>
                            <h3>
                                Дополнительная информация
                            </h3>
                        </div>
                        <Row>
                            <Col>
                                <div style={{paddingTop: 6}}>
                                    <h3>
                                        Контакты
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            {
                                Object
                                    .keys(profile.contacts)
                                    .map((key) => {
                                        return profile.contacts[key as keyof ContactsType] ?
                                            <Contact key={key} contactTitle={key}
                                                     contactValue={profile.contacts[key as keyof ContactsType]}/> : null
                                    })
                            }
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{display: 'inline-block', paddingRight: 70, paddingTop: 50, width: 500, float: 'right'}}>

                {/*<span>Ищу работу: </span>*/}
                {/*<span>{profile.lookingForAJob ? "Да" : "Нет"}</span>*/}

                {profile.aboutMe &&
                <span>
                    <span style={{fontSize: 15, color: 'gray'}}>
                        О себе:&nbsp;
                    </span>
                    {profile.aboutMe}
                </span>
                }
                <br/>
                {profile.lookingForAJobDescription &&
                <span>
                    <span style={{fontSize: 15, color: 'gray'}}>
                        Проф. навыки:&nbsp;
                    </span>
                    {profile.lookingForAJobDescription}
                </span>
                }
            </div>

        </div>
    )
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <Row>
            <span>{contactTitle[0].toUpperCase() + contactTitle.substr(1)}: &nbsp;</span>
            <a href={contactValue}>@{contactValue.substr(contactValue.lastIndexOf('/') + 1)}</a>
        </Row>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

type ProfileAdditionalDataPropsType = {
    profile: ProfileType
}

export default ProfileAdditionalData;