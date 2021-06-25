import React from "react";
import s from "./Users.module.css";
import noAvatar from "../../assets/images/no-avatar.jpg";
import {NavLink} from "react-router-dom";
import {follow, unfollow} from "../../redux/users-reducer";

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
                    return <span key={p} className={props.currentPage === p ? s.selectedPage : undefined} onClick={() => {
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
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => props.follow(user.id)}>Follow</button>}
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

