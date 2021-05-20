import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'

const ProfileContainer = (props) => {
    let setUserProfile = () => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 17209
        }
        let headers = {'API-KEY': '3045492f-9e21-4f17-8ddd-7a6988b5503a'};
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {headers})
            .then(response => {
                props.setUserProfile(response.data)
            })
    }

    useEffect(setUserProfile, [])
    return (
        <Profile {...props} profile={props.profile} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile }) (withUrlDataContainerComponent)