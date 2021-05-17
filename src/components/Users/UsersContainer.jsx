import React, {useEffect} from "react";
import s from './Users.module.css'
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";

const UsersContainer = (props) => {

    let getUsers = (page = props.currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount)
            })
    }

    let onPageChanged = (p) => {
        props.setCurrentPage(p)
        getUsers(p)
    }

    useEffect(getUsers, [])

    return <Users
        onPageChanged={onPageChanged}
        follow={props.follow}
        unfollow={props.unfollow}
        users={props.users}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        totalUsersCount={props.totalUsersCount}
    />
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountActionCreator(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)