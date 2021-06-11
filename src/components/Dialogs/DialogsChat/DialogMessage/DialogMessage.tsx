import React, {FC} from "react";
import {useSelector} from "react-redux";
import {selectUserName} from "../../../../selectors/dialogs-selectors";

type DialogMessagePropsType = {
    messageText: string
    senderId: number
}

const DialogMessage: FC<DialogMessagePropsType> = React.memo(({messageText, senderId}) => {
    const selectedUserName = useSelector(selectUserName(senderId))

    return (
        <>
            <div style={{float: 'right'}}>
                {selectedUserName + ' '+ messageText}
            </div>
            <br/>
        </>
    );
})

export default DialogMessage;