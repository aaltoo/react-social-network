import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        <Profile {...props}/>
    )
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile }) (withUrlDataContainerComponent)