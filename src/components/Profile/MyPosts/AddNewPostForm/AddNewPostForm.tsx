import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import React, {FC} from "react";

const maxLength400 = maxLengthCreator(400);

export type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>

export const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType & PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesKeysType>('Write your post', 'newPostText', [required, maxLength400], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-new-post-form'})(AddNewPostForm);