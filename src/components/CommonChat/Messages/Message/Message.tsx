import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import {ChatMessageAPIType} from "../../../../api/chat-api";
import userPhoto from "../../../../assets/images/user.png";
import {MessageElement, MessageText, MessageUserAvatar, MessageUserName} from "./Message.styled";

const Message: FC<{ message: ChatMessageAPIType, userId: number }> = ({message, userId}) => {
    return (
            <MessageElement>
                <NavLink to={'/profile/' + userId}>
                <MessageUserAvatar alt='User message' src={message.photo !== null ? message.photo : userPhoto}/>
                </NavLink>
                <MessageUserName>{message.userName}</MessageUserName>
                <br/>
                <MessageText>{message.message}</MessageText>
            </MessageElement>
    )
}

export default React.memo(Message);