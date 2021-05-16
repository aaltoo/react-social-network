import React from "react";
import s from './Users.module.css'
import axios from "axios";
import noAvatar from './../../assets/images/no-avatar.jpg'

const Users = (props) => {

    if (!props.users.length) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : noAvatar} className={s.avatar} />
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users