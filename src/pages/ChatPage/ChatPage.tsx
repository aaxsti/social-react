import {Button, Col, Row} from "antd"
import React, {FC, useEffect, useRef, useState} from "react"
import {ChatMessageAPIType} from "../../api/chat-api"
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import TextArea from "antd/lib/input/TextArea";
import {Image} from 'antd';
import s from './ChatPage.module.css'
import userPhoto from "../../assets/images/user.png";
import {SendOutlined, MessageOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const ChatPage: FC = () => {
    return (
        <div>
            <h2><MessageOutlined/> Мессенджер</h2>
            <Row>
                <Col>
                    <Dialogs/>
                </Col>
                <Col>
                    <Chat/>
                </Col>
            </Row>
        </div>
    )
}

const Dialogs: FC = () => {
    return (
        <div className={s.dialogsBlock}>
            <Row className={s.dialogElement}>
                <Image src={"https://picsum.photos/400/400"} className={s.dialogImage}/>
                <span className={s.dialogName}>Максим</span>
            </Row>
            <Row className={s.dialogElement}>
                <Image src={"https://picsum.photos/200/200"} className={s.dialogImage}/>
                <span className={s.dialogName}>Илья</span>
            </Row>
            <Row className={s.dialogElement}>
                <Image src={"https://picsum.photos/300/300"} className={s.dialogImage}/>
                <span className={s.dialogName}>Игорь</span>
            </Row>
            <Row className={s.dialogElement}>
                <Image src={"https://picsum.photos/100/100"} className={s.dialogImage}/>
                <span className={s.dialogName}>Александр</span>
            </Row>
        </div>
    )
}

const Chat: FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

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

const Messages: FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{height: '400px', width: '500px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
            <div ref={messagesAnchorRef}>

            </div>
        </div>
    )
}

const Message: FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    return (
        <div>

            <div style={{padding: '3px 0 0 10px', borderBottom: '1px #dadcdf solid'}}>
                <img alt='User photo' src={message.photo !== null ? message.photo : userPhoto} style={{width: '30px', borderRadius: 15}}/>
                <b style={{width: '30px', paddingLeft: 7}}>{message.userName}</b>
                <br/>
                {message.message}
            </div>

        </div>
    )
})

const AddMessageForm: FC<{}> = ({}) => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

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
                <TextArea autoSize={true} style={{width: 420, height: 30}} onChange={(e) => setMessage(e.currentTarget.value)}
                          value={message}>

                </TextArea>
            </Col>
            <Col style={{padding: '20px 0 0 0'}}>
                <Button disabled={status !== 'ready'} onClick={sendMessageHandler}><SendOutlined /></Button>
            </Col>
        </Row>
    )
}

export default withAuthRedirect(ChatPage);