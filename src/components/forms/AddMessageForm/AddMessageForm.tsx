import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";
import {Button, Row} from "antd";
import {SendOutlined} from "@ant-design/icons";
import {selectChatStatus} from "../../../selectors/chat-selectors";
import { AddMessageFormElement, AddMessageFormTextArea } from "./AddMessageForm.styled";

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector(selectChatStatus)

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <Row>
            <AddMessageFormElement>
                <AddMessageFormTextArea
                    autoSize={true}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    value={message}>

                </AddMessageFormTextArea>
            </AddMessageFormElement>
            <AddMessageFormElement>
                <Button disabled={status !== 'ready'} onClick={sendMessageHandler}><SendOutlined/></Button>
            </AddMessageFormElement>
        </Row>
    )
}

export default AddMessageForm;