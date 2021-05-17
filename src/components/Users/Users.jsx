import React, {useEffect} from "react";
import s from './Users.module.css'
import axios from "axios";
import noAvatar from './../../assets/images/no-avatar.jpg'

const Users = (props) => {

    let getUsers = () => {
        axios.get("https://60a0e51dd2855b00173b15c9.mockapi.io/users")
            .then(response => {
                props.setUsers(response.data)
            })
    }

    useEffect(getUsers)

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
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users