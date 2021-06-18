import React, {FC} from "react";
import {ChatMessageAPIType} from "../../../../api/chat-api";
import userPhoto from "../../../../assets/images/user.png";
import {MessageElement, MessageText, MessageUserAvatar, MessageUserName} from "./Message.styled";

const Message: FC<{ message: ChatMessageAPIType }> = ({message}) => {
    return (
            <MessageElement>
                <MessageUserAvatar alt='User message' src={message.photo !== null ? message.photo : userPhoto}/>
                <MessageUserName>{message.userName}</MessageUserName>
                <br/>
                <MessageText>{message.message}</MessageText>
            </MessageElement>
    )
}

export default React.memo(Message);