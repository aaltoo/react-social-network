import React, {useEffect} from "react";
import s from './Users.module.css'
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../Loader/Preloader";

const UsersContainer = (props) => {

    let getUsers = (page = props.currentPage) => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`, {withCredentials: true})
            .then(response => {
                props.toggleIsFetching(false)
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount)
            })
    }

    let onPageChanged = (p) => {
        props.setCurrentPage(p)
        getUsers(p)
    }

    useEffect(getUsers, [])

    return <>
        {props.isFetching ? <Preloader/> : <Users
            onPageChanged={onPageChanged}
            follow={props.follow}
            unfollow={props.unfollow}
            users={props.users}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            totalUsersCount={props.totalUsersCount}
        />}
    </>
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps =  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) (UsersContainer)