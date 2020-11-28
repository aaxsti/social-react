import {Field, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={Input}/> Remember me
            </div>
            {props.error &&
            <div className={style.formSummeryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm);