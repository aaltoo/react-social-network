import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Write something cool'
                component="textarea"
                name="newPostText"
            />
            <button>Add post</button>
        </form>
    )
}

AddPostForm = reduxForm({form: 'profileAddPostForm'}) (AddPostForm)

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