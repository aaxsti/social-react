import React, {FC} from "react";
import {createField, GetStringKeys, InputField, Textarea} from "../FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";
import {Col, Row} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import {
    FormElement,
    ProfileDataFormContacts,
    ProfileDataFormHeader,
    ProfileDataFormWrapper,
    SaveFormButton
} from './ProfileDataForm.styled'
import {maxLengthCreator} from "../../../utils/validators";

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const maxLength150 = maxLengthCreator(150)
const maxLength50 = maxLengthCreator(50)
const maxLength300 = maxLengthCreator(300)

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <ProfileDataFormWrapper onSubmit={handleSubmit}>
                <Row>
                    <ProfileDataFormContacts>
                        <ProfileDataFormHeader>
                            Контакты
                        </ProfileDataFormHeader>
                        <div>
                            {Object.keys(profile.contacts).map(key => {
                                return <FormElement key={key}>
                                    <span>{key[0].toUpperCase() + key.substr(1)}
                                        {createField(key, "contacts." + key, [maxLength150], InputField)}
                                    </span>
                                </FormElement>
                            })}
                        </div>
                    </ProfileDataFormContacts>

                    <Col>
                        <ProfileDataFormHeader>
                            Персональная информация
                        </ProfileDataFormHeader>

                        <FormElement>
                            <span>Никнейм</span>
                            {createField<ProfileTypeKeys>("Никнейм...", "fullName", [maxLength50], InputField)}
                        </FormElement>
                        {/*<div>*/}
                        {/*    <b>Looking for a job</b>*/}
                        {/*    {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}*/}
                        {/*</div>*/}
                        <FormElement>
                            <span>Профессиональные навыки</span>
                            {createField<ProfileTypeKeys>("Профессиональные навыки...", "lookingForAJobDescription", [maxLength300], Textarea)}
                        </FormElement>
                        <FormElement>
                            <span>О себе</span>
                            {createField<ProfileTypeKeys>("О себе...", "aboutMe", [maxLength300], Textarea)}
                        </FormElement>

                            <SaveFormButton htmlType={'submit'} onClick={() => {
                            }}><SaveOutlined/> Сохранить</SaveFormButton>

                        {error &&
                        <div>
                            {error}
                        </div>
                        }

                    </Col>
                </Row>
        </ProfileDataFormWrapper>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
