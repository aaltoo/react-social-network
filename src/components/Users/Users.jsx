import React from "react";
import s from './Users.module.css'

const Users = (props) => {

    if (!props.users.length) {
        props.setUsers([
            { id: 0, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Guy_Pearce_Cannes_2012.jpg',
                followed: true, fullName: 'Anatoly', status: 'I am a boss', location: {city: 'Yakutsk', country: 'Russia'} },
            { id: 1, photoUrl: 'https://www.lboro.ac.uk/media/media/subjects/geography-environment/images/staff-profiles/pgr-students/Guy%20Tallentire.jpg',
                followed: true, fullName: 'Nikolai', status: 'Draining', location: {city: 'Yakutsk', country: 'Russia'} },
            { id: 2, photoUrl: 'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg',
                followed: false, fullName: 'Julia', status: 'Working', location: {city: 'Moscow', country: 'Russia'} }
        ])
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={s.avatar} />
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
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