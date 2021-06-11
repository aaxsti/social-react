import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import {Button} from "antd";
import styled from "styled-components";

export const AddPostButtonWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 11px;
`
const maxLength400 = maxLengthCreator(400);

export type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>

export const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType & PropsType> & PropsType> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                {createField<AddPostFormValuesKeysType>('Что у вас нового?', 'newPostText', [required, maxLength400], Textarea)}
                <AddPostButtonWrapper>
                    <Button htmlType="submit">Опубликовать</Button>
                </AddPostButtonWrapper>
            </form>
        </>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-new-post-form'})(AddNewPostForm);