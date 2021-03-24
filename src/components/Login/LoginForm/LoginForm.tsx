import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {createField, GetStringKeys, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {LoginFormOwnProps, LoginFormValuesType } from "../LoginPage";

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginForm: FC<InjectedFormProps<LoginFormValuesType & LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

            {error &&
            <div className={style.formSummeryError}>
                {error}
            </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);