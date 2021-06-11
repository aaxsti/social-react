import React, {FC} from "react";
import {useSelector} from "react-redux";
import {selectUserName} from "../../../../selectors/dialogs-selectors";
import {Avatar} from "antd";
import {selectAuthorizedUserAvatar} from "../../../../selectors/auth-selectors";
import { DialogMessageElement, DialogMessageText } from "./DialogMessage.styled";

type DialogMessagePropsType = {
    messageText: string
    senderId: number
}

const DialogMessage: FC<DialogMessagePropsType> = ({messageText, senderId}) => {

    const selectedUserName = useSelector(selectUserName(senderId))
    const profileImage = useSelector(selectAuthorizedUserAvatar)

    return (
        <DialogMessageElement>
            <Avatar size={'large'} src={profileImage} alt="Dialog message photo"/>
            <DialogMessageText>{messageText}</DialogMessageText>
        </DialogMessageElement>
    );
}

export default React.memo(DialogMessage);