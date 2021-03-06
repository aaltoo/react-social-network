import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <Field
                placeholder="email"
                name="email"
                component={Input}
                validate={[required]}
            />
            <Field
                placeholder="password"
                name="password"
                component={Input}
                validate={[required]}
                type="password"
            />
            <span>
                <Field
                    component="input"
                    name="rememberMe"
                    type="checkbox"
                /> remember me
            </span>
            <div >
                {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            </div>
            <button>Login</button>
        </form>
    )
}

export default reduxForm ({ form: 'login' }) (LoginForm)
