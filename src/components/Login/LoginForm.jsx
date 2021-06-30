import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <Field
                placeholder="login"
                name="login"
                component={Input}
                validate={[required]}
            />
            <Field
                placeholder="password"
                name="password"
                component={Input}
                validate={[required]}
            />
            <span>
                <Field
                    component="input"
                    name="rememberMe"
                    type="checkbox"
                /> remember me
            </span>
            <button>Login</button>
        </form>
    )
}

export default reduxForm ({ form: 'login' }) (LoginForm)
