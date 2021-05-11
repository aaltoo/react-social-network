import React from 'react'
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
            <Dialogs
              sendMessage={sendMessage}
              updateNewMessageBody={onMessageChange}
              messages={state.dialogsPage.messages}
              dialogs={state.dialogsPage.dialogs}
              newMessageBody={state.dialogsPage.newMessageBody}
            />
    )
}

export default DialogsContainer