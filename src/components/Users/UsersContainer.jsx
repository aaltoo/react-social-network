import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {
    follow,
    requestUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Loader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

const UsersContainer = (props) => {

    useEffect(() => props.requestUsers(props.currentPage, props.pageSize), [])

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize)
    }

    return <>
        {props.isFetching ? <Preloader/> : <Users
            onPageChanged={onPageChanged}
            {...props}
        />}
    </>
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps =  {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers,
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
) (UsersContainer)