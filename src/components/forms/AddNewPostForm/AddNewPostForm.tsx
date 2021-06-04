import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {Button, Form} from "antd";

const maxLength400 = maxLengthCreator(400);

export type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>

export const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType & PropsType> & PropsType> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {createField<AddPostFormValuesKeysType>('Что у вас нового?', 'newPostText', [required, maxLength400], Textarea)}
                <div style={{paddingBottom: 11, paddingTop: 15}}>
                    <Button htmlType="submit">Опубликовать</Button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-new-post-form'})(AddNewPostForm);