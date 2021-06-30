import React, {useEffect} from "react";
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    useEffect(props.getAuthUserData, [props.isAuth])

    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = {
    getAuthUserData,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer)