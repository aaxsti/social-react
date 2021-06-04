import React, {FC} from "react";
import LoginForm from "../forms/LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store/redux-store";
import {login} from "../../redux/auth-reducer";
import {LoginOutlined} from "@ant-design/icons";
import {selectIsAuth} from "../../selectors/auth-selectors";

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
            <h1 style={{paddingBottom: 8}}>Войти в аккаунт &nbsp; &nbsp;<LoginOutlined /></h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}