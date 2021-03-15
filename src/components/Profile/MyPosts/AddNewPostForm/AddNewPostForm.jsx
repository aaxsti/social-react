import {Field, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import React from "react";


const maxLength400 = maxLengthCreator(400);

export const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Write your post', 'newPostText', [required, maxLength400], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);