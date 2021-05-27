import React from "react";
import s from "./Users.module.css";
import noAvatar from "../../assets/images/no-avatar.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersPage}>
            <div className={s.pagePagination}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p && s.selectedPage} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : noAvatar} className={s.avatar}/>
                        </NavLink>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {withCredentials: true,  headers: { "API-KEY": "3045492f-9e21-4f17-8ddd-7a6988b5503a" }})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                        {withCredentials: true, headers: { "API-KEY": "3045492f-9e21-4f17-8ddd-7a6988b5503a" }})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users

