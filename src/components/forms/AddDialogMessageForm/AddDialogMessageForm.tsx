import {useDispatch, useSelector} from "react-redux";
import {selectDialogUserId} from "../../../selectors/dialogs-selectors";
import React, {useState} from "react";
import {sendDialogMessage} from "../../../redux/dialogs-reducer";
import {Row} from "antd";
import {AddMessageFormElement} from "../AddMessageForm/AddMessageForm.styled";
import {AddDialogMessageFormTextArea} from "./AddDialogMessageForm.styled";

const AddDialogMessageForm = () => {
    const selectedUserId = useSelector(selectDialogUserId)

    const [message, setMessage] = useState<string>('')
    const dispatch = useDispatch()

    const sendMessageHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter'){
            event.preventDefault();
        }
        if (!message) {
            return;
        }
        dispatch(sendDialogMessage(selectedUserId, message))
        setMessage('')
    }

    return (
        <form>
            <Row>
                <AddMessageFormElement>
                    <AddDialogMessageFormTextArea
                        placeholder="Напишите сообщение..."
                        autoSize
                        onPressEnter={sendMessageHandler}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        value={message}>
                    </AddDialogMessageFormTextArea>
                </AddMessageFormElement>
                {/*<AddMessageFormElement>*/}
                {/*    <Button onKeyDown={sendMessageHandler}>*/}
                {/*        <SendOutlined/>*/}
                {/*    </Button>*/}
                {/*</AddMessageFormElement>*/}
            </Row>
        </form>
    );
}

export default AddDialogMessageForm;