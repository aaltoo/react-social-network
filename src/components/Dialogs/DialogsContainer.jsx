import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = {
    updateNewMessageBody,
    sendMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (DialogsContainer)
