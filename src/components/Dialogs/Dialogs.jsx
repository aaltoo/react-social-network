import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />)
    let newMessageBody = props.dialogsPage.newMessageBody

    const sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea onChange={ onMessageChange }
                          value={ newMessageBody }
                          placeholder='Enter your message'
                />

                <button disabled={ !newMessageBody.length } onClick={ sendMessage }>send</button>
            </div>
        </div>
    )
}

export default Dialogs