import {useSelector} from "react-redux";
import {selectDialogMessages} from "../../../selectors/dialogs-selectors";
import {DialogChatWindow, DialogMessagesBlock} from "./DialogsChat.styled";
import React from "react";
import DialogMessage from "./DialogMessage/DialogMessage";
import AddDialogMessageForm from "../../forms/AddDialogMessageForm/AddDialogMessageForm";

const DialogsChat = () => {
    const messages = useSelector(selectDialogMessages)
    return (
        <DialogMessagesBlock>

            <DialogChatWindow>
                {
                    messages.map(m => <DialogMessage
                        key={m.id}
                        messageText={m.body}
                        senderId={m.senderId}
                    />)
                }
            </DialogChatWindow>

            <AddDialogMessageForm/>

        </DialogMessagesBlock>
    );
}

export default DialogsChat;