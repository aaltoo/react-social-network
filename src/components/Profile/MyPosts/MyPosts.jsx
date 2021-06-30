import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post
        message={post.message}
        likeCount={' ' + post.likeCount + ' likes'}
        key={post.id}
    />)

    const addPost = (values) => {
        console.log(values.newPostText)
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <AddPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts