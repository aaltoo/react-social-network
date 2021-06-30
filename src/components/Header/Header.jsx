import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/7/73/Roscartography_Company_logo.png" alt=""/>
            <div className={styles.loginBlock}>
                { props.isAuth ? <button onClick={props.logout}>logout</button> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header