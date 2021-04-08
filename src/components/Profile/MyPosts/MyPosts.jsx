import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCount={' ' + post.likeCount + ' likes'} />)

    return (
            <div className={s.postsBlock}>
                my posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
    )
}

export default MyPosts