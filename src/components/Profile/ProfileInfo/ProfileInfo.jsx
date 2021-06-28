import React, {useState} from "react";
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Loader/Preloader";
import noAvatar from './../../../assets/images/no-avatar.jpg'

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false)

    let onStatusChange = (e) => {
        props.setStatus(e.target.value)
    }

    let onEditFinish = () => {
        setEditMode(false)
        props.updateStatus(props.status)
    }

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={ props.profile.photos.large || noAvatar} className={styles.avatar}/>
                <input type="file"/>
                <p>{props.profile.fullName}</p>
                <div className={styles.status}>
                    <p
                        className={editMode ? styles.hidden : styles.status}
                        onDoubleClick={() => setEditMode(true)}
                    >{props.status}</p>
                    <input
                        className={editMode ? styles.status : styles.hidden}
                        value={props.status}
                        autoFocus={true}
                        onChange={onStatusChange}
                        onBlur={onEditFinish}
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo