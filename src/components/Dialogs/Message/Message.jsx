import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogElements/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Victor' },
]

let messages = [
    { id: 0, message: 'Hi how are ya?'},
    { id: 1, message: 'whassup?'},
    { id: 2, message: 'Yooo'},
    { id: 3, message: 'What\'s been up?'},
]

let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

let messageElements = messages.map(message => <Message message={message.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs