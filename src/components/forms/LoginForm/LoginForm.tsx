import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../FormsControls/FormsControls.module.css";
import {createField, GetStringKeys, InputField} from "../FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {LoginFormOwnProps, LoginFormValuesType} from "../../Login/LoginPage";
import {Button, Col, Input, Row} from "antd";
import {NavLink} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType & LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <Row style={{width: '200px'}}>
                    <Row style={{paddingBottom: 15}}>
                        {createField<LoginFormValuesTypeKeys>("Email", "email", [required], InputField)}
                    </Row>

                    <Row style={{paddingBottom: 15}}>
                        {createField<LoginFormValuesTypeKeys>("Пароль", "password", [required], InputField, {type: "password"})}
                    </Row>
                    <Row style={{paddingBottom: 15}}>
                            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], InputField, {type: "checkbox"}, "")}
                            Запомнить меня
                    </Row>
                </Row>
                {error &&
                <div className={style.formSummeryError}>
                    {error}
                </div>
                }

                <div>
                    <Button htmlType="submit">Войти</Button>
                    <NavLink to={'/signup'}><Button type="link">Создать аккаунт</Button></NavLink>
                </div>
            </form>
        )
    }

export default reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);