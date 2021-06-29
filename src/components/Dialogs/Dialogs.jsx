import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Field, reduxForm} from "redux-form";

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Enter your message"
                component="textarea"
                name="newMessageBody"
            />
            <button>send</button>
        </form>
    )
}

AddMessageForm = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs