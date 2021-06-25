import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'

const ProfileContainer = (props) => {
    let setUserProfile = () => {
        let userId = props.match.params.userId
        console.log(props.match)
        if (!userId) {
            userId = 17209
        }
        props.getUserProfile(userId)
    }

    useEffect(setUserProfile, [props.match.params.userId])
    return (
        <Profile {...props} profile={props.profile} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile }) (withUrlDataContainerComponent)