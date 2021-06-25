import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post
        message={post.message}
        likeCount={' ' + post.likeCount + ' likes'}
        key={post.id}
    />)

    let newPostText = props.newPostText

    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
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
                        <button disabled={ !newPostText.length } onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
    )
}

export default MyPosts