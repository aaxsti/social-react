import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";


export const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "remember me", [], Input, {type: "checkbox"}, "Remember me")}

            {error &&
            <div className={style.formSummeryError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);