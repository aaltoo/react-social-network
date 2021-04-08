import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                avatar + description
            </div>
           <MyPosts></MyPosts>
        </div>
    )
}

export default Profile