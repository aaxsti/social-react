import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, {FC} from "react";
import { NewMessageFormValuesType } from "../Dialogs";

const maxLength100 = maxLengthCreator(100)

type NewMessageFormValuesKeysType = GetStringKeys<NewMessageFormValuesType>
type PropsType = {}

export const AddMessageForm: FC<InjectedFormProps<NewMessageFormValuesType & PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength100], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType, PropsType>({form: "dialog-add-message-form"})(AddMessageForm)