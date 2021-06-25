import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "antd";
import {DeleteMessageButton, DialogMessageElement, DialogMessageText} from "./DialogMessage.styled";
import {selectDialogUserData} from "../../../../selectors/dialogs-selectors";
import {deleteDialogMessage} from "../../../../redux/dialogs-reducer";

type DialogMessagePropsType = {
    messageText: string
    senderId: number
    viewed: boolean
    messageId: string
}

const DialogMessage: FC<DialogMessagePropsType> = ({messageText, senderId,viewed, messageId}) => {
    const selectedDialogUserData = useSelector(selectDialogUserData(senderId))
    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteDialogMessage(messageId))
    }

    return (
        <DialogMessageElement viewed={viewed}>
            <Avatar size={'large'} src={selectedDialogUserData[1]} alt="Dialog message"/>&nbsp;
             <b>{selectedDialogUserData[0]}</b> <DeleteMessageButton onClick={handleDeleteMessage}/>
            <DialogMessageText>{messageText}</DialogMessageText>
        </DialogMessageElement>
    );
}

export default React.memo(DialogMessage);