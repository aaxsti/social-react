import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import {startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import AddMessageForm from "../forms/AddMessageForm/AddMessageForm";
import Messages from "./Messages/Messages";

const CommonChat: FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])

    return (
        <div style={{margin: '0 auto'}}>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </div>
    )
}

export default CommonChat;
