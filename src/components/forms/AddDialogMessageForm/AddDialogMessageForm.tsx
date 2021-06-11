import {useDispatch, useSelector} from "react-redux";
import {selectDialogUser} from "../../../selectors/dialogs-selectors";
import React, {useState} from "react";
import {sendDialogMessage} from "../../../redux/dialogs-reducer";
import {Button, Col, Row} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {SendOutlined} from "@ant-design/icons";

const AddDialogMessageForm = () => {
    const selectedUser = useSelector(selectDialogUser)

    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendDialogMessage(selectedUser, message))
        setMessage('')
    }

    return (
        <form>
            <Row>
                <Col style={{paddingTop: 20}}>
                    <TextArea
                        autoSize={true}
                        style={{height: 30, width: 384}}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        value={message}>
                    </TextArea>
                </Col>
                <Col style={{paddingTop: 20}}>
                    <Button onClick={sendMessageHandler}><SendOutlined/></Button>
                </Col>
            </Row>
        </form>
    );
}

export default AddDialogMessageForm;