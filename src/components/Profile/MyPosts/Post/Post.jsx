import React from "react";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
    )
}

export default MyPosts