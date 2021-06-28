import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let setUserProfile = () => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 17209
        }
        props.getUserProfile(userId)
    }

    useEffect(setUserProfile, [props.match.params.userId])
    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = {
    getUserProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
) (ProfileContainer)

