import {Row} from "antd"
import React, {FC} from "react"
import {MessageOutlined} from "@ant-design/icons";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import DialogsChat from "../../components/Dialogs/DialogsChat/DialogsChat";
import Dialogs from "../../components/Dialogs/Dialogs/Dialogs";

const DialogsPage: FC = () => {
    return (
        <div>
            <h2><MessageOutlined/> Мессенджер</h2>
            <Row>
                <Dialogs/>
                <DialogsChat/>
            </Row>
        </div>
    )
}


export default withAuthRedirect(DialogsPage);