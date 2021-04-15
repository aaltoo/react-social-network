import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likeCount={' ' + post.likeCount + ' likes'} />)
    let newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value

        props.addPost(text)
    }

    return (
            <div className={s.postsBlock}>
                my posts
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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