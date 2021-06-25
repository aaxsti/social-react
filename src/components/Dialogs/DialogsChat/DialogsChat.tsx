import {useDispatch, useSelector} from "react-redux";
import {selectDialogMessages, selectDialogUserId} from "../../../selectors/dialogs-selectors";
import {DialogChatWindow, DialogMessagesBlock, NoDialogHeader} from "./DialogsChat.styled";
import React, {useEffect, useRef, useState} from "react";
import DialogMessage from "./DialogMessage/DialogMessage";
import AddDialogMessageForm from "../../forms/AddDialogMessageForm/AddDialogMessageForm";
import {autoScrollHelper, scrollChatHelper} from "../../../utils/scroll-chat-helper";
import {getDialogMessages} from "../../../redux/dialogs-reducer";

const DialogsChat = () => {
    const messages = useSelector(selectDialogMessages)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const selectedUserId = useSelector(selectDialogUserId)
    const dispatch = useDispatch()

    useEffect(() => {
        autoScrollHelper(messagesAnchorRef, isAutoScroll)
    }, [messages])

    useEffect(() => {
        let refresh = null as any
        if (selectedUserId !== 0) {
            refresh = setInterval(() =>  {console.log(selectedUserId, messages); dispatch(getDialogMessages(selectedUserId))}, 3000)
        }
        if (refresh !== null) return () => clearInterval(refresh)
    }, [dispatch, selectedUserId]);

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        scrollChatHelper(e, isAutoScroll, setIsAutoScroll)
    }

    return (
        <>
            <DialogMessagesBlock>
                {!!selectedUserId ?
                    <>
                        <DialogChatWindow onScroll={scrollHandler}>
                            {messages.length !== 0 ?
                                messages.map(m => <DialogMessage
                                    key={m.id}
                                    messageId={m.id}
                                    messageText={m.body}
                                    senderId={m.senderId}
                                    viewed={m.viewed}
                                />) : <NoDialogHeader>Нет сообщений</NoDialogHeader>
                            }
                            <div ref={messagesAnchorRef}>

                            </div>
                        </DialogChatWindow>
                        <AddDialogMessageForm/>
                    </>
                    : <NoDialogHeader>
                        Выберите диалог
                    </NoDialogHeader>
                }
            </DialogMessagesBlock>
        </>
    );
}

export default DialogsChat;