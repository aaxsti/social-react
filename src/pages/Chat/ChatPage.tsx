import {Button} from "antd"
import React, {FC, useEffect, useRef, useState} from "react"
import {ChatMessageAPIType} from "../../api/chat-api"
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/redux-store";

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])

    return (
        <div>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </div>
    )
}

const Messages: FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{height: '400px', width: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

const AddMessageForm: FC<{}> = ({}) => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}>

                </textarea>
            </div>
            <div>
                <Button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</Button>
            </div>
        </div>
    )
}

export default ChatPage