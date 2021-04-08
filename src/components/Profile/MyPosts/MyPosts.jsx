import React from "react";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                avatar + description
            </div>
            <div>
                my posts
            </div>
            <div>
                new post
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    )
}

export default MyPosts