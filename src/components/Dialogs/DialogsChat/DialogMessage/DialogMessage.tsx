import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "antd";
import {DialogMessageElement, DialogMessageText, RightMessageElements} from "./DialogMessage.styled";
import {selectDialogUserData} from "../../../../selectors/dialogs-selectors";
import {deleteDialogMessage} from "../../../../redux/dialogs-reducer";
import {formatDate} from "../../../../utils/format-date";
import {CloseCircleOutlined} from "@ant-design/icons";

type DialogMessagePropsType = {
    messageText: string
    senderId: number
    viewed: boolean
    messageId: string
    addedAt: string
}

const DialogMessage: FC<DialogMessagePropsType> = ({messageText, senderId, viewed, messageId, addedAt}) => {
    const selectedDialogUserData = useSelector(selectDialogUserData(senderId))
    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteDialogMessage(messageId))
    }

    return (
        <DialogMessageElement viewed={viewed}>
            <Avatar size={'large'} src={selectedDialogUserData[1]} alt="Dialog message"/>&nbsp;
            <b>{selectedDialogUserData[0]} </b>

            <RightMessageElements>
                <span> {formatDate(addedAt)}</span> &nbsp;
                <CloseCircleOutlined onClick={handleDeleteMessage}/>
            </RightMessageElements>

            <DialogMessageText>{messageText}</DialogMessageText>
        </DialogMessageElement>
    );
}

export default React.memo(DialogMessage);