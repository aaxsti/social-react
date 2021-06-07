import React from 'react';
import DialogMessages from "./DialogMessages/DialogMessages";
import AddDialogMessageForm from "../../forms/AddDialogMessageForm/AddDialogMessageForm";
import {DialogMessagesBlock} from './DialogsChat.styled';

const DialogsChat = () => {
    return (
        <DialogMessagesBlock>
            <DialogMessages/>
            <AddDialogMessageForm/>
        </DialogMessagesBlock>
    );
}

export default DialogsChat;