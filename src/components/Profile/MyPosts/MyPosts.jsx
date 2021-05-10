import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

let updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post
      message={post.message}
      likeCount={' ' + post.likeCount + ' likes'}
    />)
    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
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
                            ref={ newPostElement }
                            value={ props.newPostText }
                        />
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
    )
}

export default MyPosts