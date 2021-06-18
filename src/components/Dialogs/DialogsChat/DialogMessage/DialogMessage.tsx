import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Avatar} from "antd";
import {selectAuthorizedUserAvatar} from "../../../../selectors/auth-selectors";
import { DialogMessageElement, DialogMessageText } from "./DialogMessage.styled";
import {selectUserName} from "../../../../selectors/dialogs-selectors";

type DialogMessagePropsType = {
    messageText: string
    senderId: number
}

const DialogMessage: FC<DialogMessagePropsType> = ({messageText, senderId}) => {

    const selectedUserName = useSelector(selectUserName(senderId))
    const profileImage = useSelector(selectAuthorizedUserAvatar)

    return (
        <DialogMessageElement>
            <Avatar size={'large'} src={profileImage} alt="Dialog message"/>&nbsp;
             <b>{selectedUserName}</b>
            <DialogMessageText>{messageText}</DialogMessageText>
        </DialogMessageElement>
    );
}

export default React.memo(DialogMessage);