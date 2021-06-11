import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../FormsControls/FormsControls.module.css";
import {createField, GetStringKeys, InputField} from "../FormsControls/FormsControls";
import {required} from "../../../utils/validators";
import React, {FC} from "react";
import {LoginFormOwnProps, LoginFormValuesType} from "../../../pages/LoginPage/LoginPage";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {LoginFormField, LoginFormWrapper } from "./LoginForm.styled";

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType & LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <LoginFormWrapper>
                    <LoginFormField>
                        {createField<LoginFormValuesTypeKeys>(
                            "Email",
                            "email",
                            [required], InputField)
                        }
                    </LoginFormField>
                    <LoginFormField>
                        {createField<LoginFormValuesTypeKeys>(
                            "Пароль",
                            "password",
                            [required],
                            InputField,
                            {type: "password"})}
                    </LoginFormField>
                    Запомнить меня &nbsp;
                    <LoginFormField>
                            {createField<LoginFormValuesTypeKeys>(
                                undefined,
                                "rememberMe",
                                [],
                                InputField,
                                {type: "checkbox"},
                                "")}
                    </LoginFormField>
                </LoginFormWrapper>

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