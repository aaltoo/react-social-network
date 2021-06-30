import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Enter your message"
                component={Textarea}
                name="newMessageBody"
                validate={[required, maxLength50]}
            />
            <button>send</button>
        </form>
    )
}

export default reduxForm({form: 'dialogsAddMessageForm'}) (AddMessageForm)