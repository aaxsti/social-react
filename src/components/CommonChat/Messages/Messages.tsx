import React, {FC, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import Message from "./Message/Message";
import {selectChatMessages} from "../../../selectors/chat-selectors";
import styled from "styled-components";
import {scrollChatHelper} from "../../../utils/scroll-chat-helper";

export const CommonMessages = styled.div`
  height: 500px;
  border-radius: 2px;
  width: 500px;
  overflow-y: auto;
  background-color: #f3f3f7;
  border: 1px #dddede solid
`

const Messages: FC = () => {
    const messages = useSelector(selectChatMessages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        scrollChatHelper(e, isAutoScroll, setIsAutoScroll)
    }

    return (
        <CommonMessages onScroll={scrollHandler}>
            {messages.map((m) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}>

            </div>
        </CommonMessages>
    )
}

export default Messages