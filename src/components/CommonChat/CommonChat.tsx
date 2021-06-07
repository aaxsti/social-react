import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import AddMessageForm from "../forms/AddMessageForm/AddMessageForm";
import Messages from "./Messages/Messages";
import {selectChatStatus} from "../../selectors/chat-selectors";

const CommonChat: FC = () => {

    const dispatch = useDispatch()

    const status = useSelector(selectChatStatus)

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

export default CommonChat;
