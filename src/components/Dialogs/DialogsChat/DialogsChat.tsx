import {useSelector} from "react-redux";
import {selectDialogMessages, selectDialogUser} from "../../../selectors/dialogs-selectors";
import {DialogChatWindow, DialogMessagesBlock} from "./DialogsChat.styled";
import React, {useEffect, useRef, useState} from "react";
import DialogMessage from "./DialogMessage/DialogMessage";
import AddDialogMessageForm from "../../forms/AddDialogMessageForm/AddDialogMessageForm";
import {scrollChatHelper} from "../../../utils/scroll-chat-helper";

const DialogsChat = () => {
    const messages = useSelector(selectDialogMessages)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const selectedUser = useSelector(selectDialogUser)

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        scrollChatHelper(e, isAutoScroll, setIsAutoScroll)
    }

    return (
        <>
            {!!selectedUser &&
            <DialogMessagesBlock>
                <DialogChatWindow onScroll={scrollHandler}>
                    {
                        messages.map(m => <DialogMessage
                            key={m.id}
                            messageText={m.body}
                            senderId={m.senderId}
                        />)
                    }
                    <div ref={messagesAnchorRef}>

                    </div>
                </DialogChatWindow>

                <AddDialogMessageForm/>

            </DialogMessagesBlock>
            }
        </>

    );
}

export default DialogsChat;