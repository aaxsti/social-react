import {Row} from "antd"
import React, {FC, useEffect} from "react"
import {MessageOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {selectDialogs} from "../../selectors/dialogs-selectors";
import {getDialogs} from "../../redux/dialogs-reducer";
import Dialogs from "../../components/Dialogs/Dialogs/Dialogs";
import DialogsChat from "../../components/Dialogs/DialogsChat/DialogsChat";

const DialogsPage: FC = () => {
    const dialogs = useSelector(selectDialogs);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDialogs())
    }, [dispatch]);

    return (
        <div>
            <h2><MessageOutlined/> Мессенджер</h2>
            <Row>
                <Dialogs dialogs={dialogs}/>
                <DialogsChat/>
            </Row>
        </div>
    )
}

export default withAuthRedirect(DialogsPage);