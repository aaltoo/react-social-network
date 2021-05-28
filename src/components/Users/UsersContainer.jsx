import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../Loader/Preloader";
import {usersAPI} from "../../api/api";

const UsersContainer = (props) => {

    useEffect(
        () => {
            props.toggleIsFetching(true)
            usersAPI.getUsers(props.currentPage, props.pageSize)
                .then(response => {
                    props.toggleIsFetching(false)
                    props.setUsers(response.items)
                    props.setTotalUsersCount(response.totalCount)
                })}, []
    )

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, props.pageSize)
            .then(response => {
                props.toggleIsFetching(false)
                props.setUsers(response.items)
                props.setTotalUsersCount(response.totalCount)
            })
    }

    return <>
        {props.isFetching ? <Preloader/> : <Users
            onPageChanged={onPageChanged}
            follow={props.follow}
            unfollow={props.unfollow}
            users={props.users}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
            followingInProgress={props.followingInProgress}
            toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingInProgress
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)