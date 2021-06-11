import {useDispatch, useSelector} from "react-redux";
import {selectDialogUser} from "../../../selectors/dialogs-selectors";
import React, {useState} from "react";
import {sendDialogMessage} from "../../../redux/dialogs-reducer";
import {Button, Row} from "antd";
import {SendOutlined} from "@ant-design/icons";
import {AddMessageFormElement} from "../AddMessageForm/AddMessageForm.styled";
import {AddDialogMessageFormTextArea} from "./AddDialogMessageForm.styled";

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
                <AddMessageFormElement>
                    <AddDialogMessageFormTextArea
                        autoSize={true}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        value={message}>
                    </AddDialogMessageFormTextArea>
                </AddMessageFormElement>
                <AddMessageFormElement>
                    <Button onClick={sendMessageHandler}>
                        <SendOutlined/>
                    </Button>
                </AddMessageFormElement>
            </Row>
        </form>
    );
}

export default AddDialogMessageForm;