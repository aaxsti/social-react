import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";
import {Button, Col, Row} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {SendOutlined} from "@ant-design/icons";
import {selectChatStatus} from "../../../selectors/chat-selectors";

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
            <Col style={{padding: '20px 0 0 0'}}>
                <TextArea autoSize={true} style={{width: 454, height: 30}} onChange={(e) => setMessage(e.currentTarget.value)}
                          value={message}>

                </TextArea>
            </Col>
            <Col style={{padding: '20px 0 0 0'}}>
                <Button disabled={status !== 'ready'} onClick={sendMessageHandler}><SendOutlined /></Button>
            </Col>
        </Row>
    )
}

export default AddMessageForm;