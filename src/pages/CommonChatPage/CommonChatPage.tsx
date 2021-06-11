import React, {useEffect} from 'react';
import {WechatOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Messages from "../../components/CommonChat/Messages/Messages";
import AddMessageForm from "../../components/forms/AddMessageForm/AddMessageForm";
import {useDispatch, useSelector} from "react-redux";
import {selectChatStatus} from "../../selectors/chat-selectors";
import {startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import styled from "styled-components";

export const CommonChatMain = styled.div`
  margin-left: 150px;
`

const CommonChatPage = () => {
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
            <h2><WechatOutlined/> Общий чат</h2>

            <CommonChatMain>
                {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
                <Messages/>
                <AddMessageForm/>
            </CommonChatMain>
        </div>
    )
}


export default withAuthRedirect(CommonChatPage);