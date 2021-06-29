import React from "react";
import styles from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.loginForm}>
            <Field placeholder="login" name="login" component="input"/>
            <Field placeholder="password" name="password" component="input"/>
            <span>
                <Field component="input" name="rememberMe" type="checkbox"/> remember me
            </span>
            <button>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm ({ form: 'login' }) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login