import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
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
        <div style={{width: '400px', maxWidth: '400px', overflowY: 'auto'}}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    {createField<AddPostFormValuesKeysType>('Что у вас нового?', 'newPostText', [required, maxLength400], Textarea)}
                </div>
                <br/>
                <div>
                   <Button htmlType="submit">Опубликовать</Button>

                </div>
            </form>
        </div>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-new-post-form'})(AddNewPostForm);