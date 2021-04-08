import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <img className={s.avatar} src="https://sun9-14.userapi.com/impg/nqsS_lU8Fip5cFm0cPqk6MhwNtVcdiQu7Vsfug/VmWZFKZtaW4.jpg?size=801x1080&quality=96&sign=d5cd3d411759b2989ad80f1e560b4b6c&type=album" alt=""/>
            <div>
                {props.message}
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post