import React, {FC} from "react";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import {LoginOutlined} from "@ant-design/icons";
import {selectIsAuth} from "../../selectors/auth-selectors";
import styled from "styled-components";

const LoginFormHeader = styled.h1`
  padding-bottom: 8px;
`
export type LoginFormOwnProps = {}
export type LoginFormValuesType = {
    rememberMe: boolean
    password: string
    email: string
}

export const LoginPage: FC = () => {

    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <LoginFormHeader>Войти в аккаунт &nbsp; &nbsp;<LoginOutlined /></LoginFormHeader>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}