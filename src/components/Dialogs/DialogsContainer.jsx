import React from 'react'
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyActionCreator(body))
                    }

                    return (
                        <Dialogs
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                            messages={state.messages}
                            dialogs={state.dialogs}
                            newMessageBody={state.newMessageBody}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer