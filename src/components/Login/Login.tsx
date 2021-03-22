import React, {FC} from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

export type LoginFormOwnProps = {
    // captchaUrl: string
}

export type LoginFormValuesType = {
    rememberMe: boolean
    password: string
    email: string
}

const Login: FC<PropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe);
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect<MapStatePropsType, MapDispatchPropsType, any, AppStateType>
(mapStateToProps, {login})(Login)