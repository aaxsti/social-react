import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/chat-reducer";
import {Row} from "antd";
import {selectChatStatus} from "../../../selectors/chat-selectors";
import {AddMessageFormElement, AddMessageFormTextArea} from "./AddMessageForm.styled";

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState<string>('')
    const dispatch = useDispatch()

    const status = useSelector(selectChatStatus)

    const sendMessageHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter'){
            event.preventDefault();
        }
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
                    placeholder="Напишите сообщение..."
                    onPressEnter={sendMessageHandler}
                    autoSize={true}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    value={message}
                    disabled={status !== 'ready'}>
                </AddMessageFormTextArea>
            </AddMessageFormElement>
            {/*<AddMessageFormElement>*/}
            {/*    <Button disabled={status !== 'ready'} onClick={sendMessageHandler}><SendOutlined/></Button>*/}
            {/*</AddMessageFormElement>*/}
        </Row>
    )
}

export default AddMessageForm;