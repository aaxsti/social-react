import React, {FC} from "react";
import {ChatMessageAPIType} from "../../../../api/chat-api";
import userPhoto from "../../../../assets/images/user.png";

const Message: FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    console.log("message")
    return (
        <div>

            <div style={{padding: '3px 0 0 10px', borderBottom: '1px #dadcdf solid'}}>
                <img alt='User photo' src={message.photo !== null ? message.photo : userPhoto} style={{width: '30px', borderRadius: 15}}/>
                <b style={{width: '30px', paddingLeft: 7}}>{message.userName}</b>
                <br/>
                {message.message}
            </div>

        </div>
    )
})

export default Message;