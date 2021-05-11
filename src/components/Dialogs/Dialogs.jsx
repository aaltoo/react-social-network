import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = props.messages.map(message => <Message message={message.message} />)
    let newMessageBody = props.newMessageBody

    const sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

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