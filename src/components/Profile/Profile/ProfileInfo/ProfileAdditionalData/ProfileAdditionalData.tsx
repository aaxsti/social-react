import React, {FC} from "react";
import {Col, Row} from "antd";
import {ContactsType, ProfileType} from "../../../../../types/types";
import {
    AboutMeBlock,
    AboutMeElement,
    AdditionalDataBlock,
    AdditionalDataContactsWrapper,
    AdditionalDataDivider,
    AdditionalDataHeaderWrapper
} from "./ProfileAdditionalData.styled";

type ProfileAdditionalDataPropsType = {
    profile: ProfileType
}

const ProfileAdditionalData: FC<ProfileAdditionalDataPropsType> = ({profile}) => {
    return (
        <>
            <AdditionalDataDivider/>
            <AdditionalDataBlock>
                <Row>
                    <Col>
                        <AdditionalDataHeaderWrapper>
                            <h3>
                                Дополнительная информация
                            </h3>
                        </AdditionalDataHeaderWrapper>
                        <Row>
                            <Col>
                                <AdditionalDataContactsWrapper>
                                    <h3>
                                        Контакты
                                    </h3>
                                </AdditionalDataContactsWrapper>
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
            </AdditionalDataBlock>

            <AboutMeBlock>

                {/*<span>Ищу работу: </span>*/}
                {/*<span>{profile.lookingForAJob ? "Да" : "Нет"}</span>*/}

                {profile.aboutMe &&
                <span>
                    <AboutMeElement>
                        О себе:&nbsp;
                    </AboutMeElement>
                    {profile.aboutMe}
                </span>
                }
                <br/>
                {profile.lookingForAJobDescription &&
                <span>
                    <AboutMeElement>
                        Проф. навыки:&nbsp;
                    </AboutMeElement>
                    {profile.lookingForAJobDescription}
                </span>
                }
            </AboutMeBlock>
        </>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <Row>
            <span>{contactTitle[0].toUpperCase() + contactTitle.substr(1)}: &nbsp;</span>
            <a href={contactValue}>@{contactValue.substr(contactValue.lastIndexOf('/') + 1)}</a>
        </Row>
    )
}

export default ProfileAdditionalData;