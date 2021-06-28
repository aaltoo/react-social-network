import React, {useState} from "react";
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Loader/Preloader";
import noAvatar from './../../../assets/images/no-avatar.jpg'

const ProfileInfo = (props) => {
    const [status, setStatus] = useState('update status')
    const [editMode, setEditMode] = useState(false)

    let updateStatus = (e) => {
        setStatus(e.target.value)
    }

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={ props.profile.photos.large || noAvatar} className={styles.avatar}/>
                <p>{props.profile.fullName}</p>
                <div className={styles.status}>
                    <p
                        className={editMode ? styles.hidden : styles.status}
                        onDoubleClick={() => setEditMode(true)}
                    >{status}</p>
                    <input
                        className={editMode ? styles.status : styles.hidden}
                        value={status}
                        autoFocus={true}
                        onChange={updateStatus}
                        onBlur={() => setEditMode(false)}
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo