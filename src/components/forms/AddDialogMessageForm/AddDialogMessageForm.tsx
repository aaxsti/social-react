import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";
import {Button, Col, Row} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {SendOutlined} from "@ant-design/icons";

const AddDialogMessageForm = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

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
                <TextArea onKeyUp={sendMessageHandler} autoSize={true} style={{height: 30}} onChange={(e) => setMessage(e.currentTarget.value)}
                          value={message}>

                </TextArea>
            </Col>
            <Col style={{padding: '20px 0 0 0'}}>
                <Button onClick={sendMessageHandler}><SendOutlined /></Button>
            </Col>
        </Row>
    );
}

export default AddDialogMessageForm;