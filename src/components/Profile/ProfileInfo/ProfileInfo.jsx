import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://sun9-60.userapi.com/impf/c639623/v639623781/23016/IA4ZbJqN93E.jpg?size=258x258&quality=96&sign=4d9e379a0a3d53478cf3d918080f7050&type=album" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>

        </div>
    )
}

export default ProfileInfo