import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = state.messages.map(message => <Message message={message.message} />)
    let newMessageBody = state.newMessageBody

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
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