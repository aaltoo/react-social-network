import React from "react";
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Loader/Preloader";
import noAvatar from './../../../assets/images/no-avatar.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={ props.profile.photos.large || noAvatar} className={styles.avatar}/>
                <p>{props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo