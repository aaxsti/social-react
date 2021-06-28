import {useDispatch, useSelector} from "react-redux";
import {selectDialogMessages, selectDialogUserId} from "../../../selectors/dialogs-selectors";
import {DialogChatWindow, DialogMessagesBlock, NoDialogHeader} from "./DialogsChat.styled";
import React, {useEffect, useRef} from "react";
import DialogMessage from "./DialogMessage/DialogMessage";
import AddDialogMessageForm from "../../forms/AddDialogMessageForm/AddDialogMessageForm";
import {autoScrollHelper} from "../../../utils/scroll-chat-helper";
import {getDialogMessages} from "../../../redux/dialogs-reducer";

const DialogsChat = () => {
    const messages = useSelector(selectDialogMessages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const selectedUserId = useSelector(selectDialogUserId)

    const dispatch = useDispatch()

    useEffect(() => {
        messagesAnchorRef?.current?.scrollIntoView({behavior: 'smooth'})
    }, []);

    useEffect(() => {
        autoScrollHelper(messagesAnchorRef, false)
    }, [messages])  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        let refresh = null as any
        if (selectedUserId !== 0) {
            refresh = setInterval(() => {
                dispatch(getDialogMessages(selectedUserId))
            }, 5000)
        }
        if (refresh !== null) return () => clearInterval(refresh)
    }, [dispatch, selectedUserId, messages]);

    return (
        <>
            <DialogMessagesBlock>
                <h2>{}</h2>
                {!!selectedUserId ?
                    <>
                        <DialogChatWindow>
                            {messages.length !== 0 ?
                                messages.map(m => <DialogMessage
                                    key={m.id}
                                    messageId={m.id}
                                    messageText={m.body}
                                    senderId={m.senderId}
                                    viewed={m.viewed}
                                    addedAt={m.addedAt}
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