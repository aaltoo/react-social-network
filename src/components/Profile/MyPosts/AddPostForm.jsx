import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Write something cool'
                component={Textarea}
                name="newPostText"
                validate={[required, maxLength50]}
            />
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'profileAddPostForm'}) (AddPostForm)