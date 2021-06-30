import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Loader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const UsersContainer = (props) => {

    useEffect(() => props.getUsers(props.currentPage, props.pageSize), [])

    let onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps =  {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
) (UsersContainer)