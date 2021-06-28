import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {

    let userId = props.match.params.userId
    if (!userId) {
        userId = 17209
    }

    let getProfile = () => {
        props.getProfile(userId)
    }

    let getStatus = () => {
        props.getStatus(userId)
    }

    useEffect(getProfile, [userId])
    useEffect(getStatus, [userId])

    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

let mapDispatchToProps = {
    getProfile,
    getStatus,
    setStatus,
    updateStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
) (ProfileContainer)

