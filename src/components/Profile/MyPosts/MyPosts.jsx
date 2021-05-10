import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.state.posts.map(post => <Post
      message={post.message}
      likeCount={' ' + post.likeCount + ' likes'}
    />)

    let newPostText = props.state.newPostText

    const addPost = (e) => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
            <div className={s.postsBlock}>
                my posts
                <div>
                    <div>
                        <textarea
                            onChange={ onPostChange }
                            value={ newPostText }
                            placeholder='Write something cool'
                        />
                    </div>
                    <div>
                        <button disabled={ !newPostText.length } onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
    )
}

export default MyPosts