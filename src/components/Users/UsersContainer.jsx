import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../Loader/Preloader";

const UsersContainer = (props) => {

    useEffect(() => props.getUsers(props.currentPage, props.pageSize), [])

    let onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    return <>
        {props.isFetching ? <Preloader/> : <Users
            onPageChanged={onPageChanged}
            unfollow={props.unfollow}
            follow={props.follow}
            users={props.users}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            followingInProgress={props.followingInProgress}
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

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)