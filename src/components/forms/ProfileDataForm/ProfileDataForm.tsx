import React, {FC} from "react";
import {createField, GetStringKeys, InputField, Textarea} from "../FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";
import {Button, Col, Row} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import styled from 'styled-components';

const FormElement = styled.div`
  padding-top: 10px;
`

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} style={{border: '1px solid #e4e4e4', borderRadius: 2}}>
            <div style={{padding: 10}}>
                <Row>
                    <Col style={{paddingRight: 80}}>
                        <h3 style={{paddingTop: 5}}>
                            Контакты
                        </h3>

                        <div>
                            {Object.keys(profile.contacts).map(key => {
                                return <FormElement key={key}>
                                    <span>{key[0].toUpperCase() + key.substr(1)} {createField(key, "contacts." + key, [], InputField)}</span>
                                </FormElement>
                            })}
                        </div>
                    </Col>
                    <Col>
                        <h3 style={{paddingTop: 5}}>
                            Персональная информация
                        </h3>

                        <FormElement>
                            <span>Никнейм</span>
                            {createField<ProfileTypeKeys>("Никнейм...", "fullName", [], InputField)}
                        </FormElement>
                        {/*<div>*/}
                        {/*    <b>Looking for a job</b>*/}
                        {/*    {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}*/}
                        {/*</div>*/}
                        <FormElement>
                            <span>Профессиональные навыки</span>
                            {createField<ProfileTypeKeys>("Профессиональные навыки...", "lookingForAJobDescription", [], Textarea)}
                        </FormElement>
                        <FormElement>
                            <span>О себе</span>
                            {createField<ProfileTypeKeys>("О себе...", "aboutMe", [], InputField)}
                        </FormElement>

                        <FormElement style={{paddingTop: 30}}>
                            <Button htmlType={'submit'} onClick={() => {
                            }}><SaveOutlined/> Сохранить</Button>
                        </FormElement>
                        {error &&
                        <div>
                            {error}
                        </div>}

                    </Col>
                </Row>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
