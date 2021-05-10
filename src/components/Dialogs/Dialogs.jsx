import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messages.map(message => <Message message={message.message} />)
    let newMessageElement = React.createRef()

    const sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE' })
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message })
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.newMessageText}
                />
                <button onClick={ sendMessage }>send</button>
            </div>
        </div>

    )
}

export default Dialogs