import React, {FC} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import {Redirect} from "react-router-dom";
import {UserAddOutlined} from "@ant-design/icons";
import {SignUpForm} from "../../components/forms/SignUpForm/SignUpForm";

export const SignUpPage: FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1 style={{paddingBottom: 8}}>Создать аккаунт &nbsp; &nbsp;<UserAddOutlined /></h1>
            <SignUpForm/>
        </div>
    )
}