import React from 'react';
import {WechatOutlined} from "@ant-design/icons";
import CommonChat from "../../components/CommonChat/CommonChat";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const CommonChatPage = () => {
    return (
        <div>
            <h2><WechatOutlined/> Общий чат</h2>
            <CommonChat/>
        </div>
    )
}


export default withAuthRedirect(CommonChatPage);