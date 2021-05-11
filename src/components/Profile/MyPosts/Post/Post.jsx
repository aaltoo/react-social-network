import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <img className={s.avatar} src="https://sun9-60.userapi.com/impf/c639623/v639623781/23016/IA4ZbJqN93E.jpg?size=258x258&quality=96&sign=4d9e379a0a3d53478cf3d918080f7050&type=album" alt=""/>
            <div>
                {props.message}
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post