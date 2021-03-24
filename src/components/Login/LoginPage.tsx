import React, {FC} from "react";
import LoginForm from "./LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";

export type LoginFormOwnProps = {}

export type LoginFormValuesType = {
    rememberMe: boolean
    password: string
    email: string
}

export const LoginPage: FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}