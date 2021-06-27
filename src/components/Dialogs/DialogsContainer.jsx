import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const DialogsContainer = (props) => {
    return (
        <Dialogs {...props}/>
    )
}

let AuthRedirectComponent = withAuthRedirect(DialogsContainer)

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = {
    updateNewMessageBody,
    sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)