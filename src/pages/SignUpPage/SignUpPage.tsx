import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {UserAddOutlined} from "@ant-design/icons";
import {SignUpForm} from "../../components/forms/SignUpForm/SignUpForm";
import styled from "styled-components";
import {selectIsAuth} from "../../selectors/auth-selectors";

export const SignUpHeader = styled.h1`
  padding-bottom: 8px;
`

export const SignUpPage: FC = () => {

    const isAuth = useSelector(selectIsAuth)

    if (isAuth) {
        return <Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Создать аккаунт &nbsp; &nbsp;<UserAddOutlined /></h1>
            <SignUpForm/>
        </div>
    )
}