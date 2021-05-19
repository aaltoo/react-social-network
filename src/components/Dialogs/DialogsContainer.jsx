import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainer = (props) => {
    return (
        <Dialogs />
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = {
    updateNewMessageBody,
    sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps) (Dialogs)