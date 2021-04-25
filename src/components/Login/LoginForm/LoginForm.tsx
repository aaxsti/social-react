import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {createField, GetStringKeys, InputField} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {LoginFormOwnProps, LoginFormValuesType} from "../LoginPage";
import { Button } from "antd";

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType & LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div style={{width: '230px'}}>
                    {createField<LoginFormValuesTypeKeys>("Email", "email", [required], InputField)}
                    <br/>
                    {createField<LoginFormValuesTypeKeys>("Password", "password", [required], InputField, {type: "password"})}
                    {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], InputField, {type: "checkbox"}, "Remember me")}
                </div>
                {error &&
                <div className={style.formSummeryError}>
                    {error}
                </div>
                }

                <div>
                    <Button htmlType="submit">Login</Button>
                </div>
            </form>
        )
    }

export default reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);