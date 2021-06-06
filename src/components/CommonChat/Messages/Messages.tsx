import React, {FC, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/redux-store";
import Message from "./Message/Message";

const Messages: FC = () => {
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
        <div style={{height: '400px', width: '500px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
            <div ref={messagesAnchorRef}>

            </div>
        </div>
    )
}

export default Messages