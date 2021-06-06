import {Col, List, Row} from "antd"
import React, {FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {MessageOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getDialogs} from "../../redux/dialogs-reducer";
import {selectDialogs} from "../../selectors/dialogs-selectors";
import Dialog from "../../components/Dialogs/Dialog/Dialog";

const ChatPage: FC = () => {
    return (
        <div>
            <h2><MessageOutlined/> Мессенджер</h2>
            <Row>
                <Col>
                    <Dialogs/>
                </Col>
                <Col>
                  Чат
                </Col>
            </Row>
        </div>
    )
}

const Dialogs: FC = () => {

    const dialogs = useSelector(selectDialogs);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDialogs())
    }, []);

    return (
        <div>
            <List style={{width: 300}}>
                {dialogs.map(d => <Dialog
                    key={d.id}
                    userName={d.userName}
                    lastDialogActivityDate={d.lastDialogActivityDate}
                    lastUserActivityDate={d.lastUserActivityDate}
                    newMessagesCount={d.newMessagesCount}
                    photo={d.photos.small}
                    hasNewMessage={d.hasNewMessage}
                />)}
            </List>
        </div>
    )
}

export default withAuthRedirect(ChatPage);