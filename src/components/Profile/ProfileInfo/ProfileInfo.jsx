import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.avatar} src="https://sun9-15.userapi.com/impf/g57Go3Nn-gaLCjz4lcoDDeHPBHZVdXVghvhejA/UDR7YVMmC30.jpg?size=1600x1600&quality=96&sign=ce76a93247c21222b3d2644602a3564d&type=album" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
            </div>

        </div>
    )
}

export default ProfileInfo