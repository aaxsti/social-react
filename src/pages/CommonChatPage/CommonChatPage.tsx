import React from 'react';
import {WechatOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import CommonChat from "../../components/CommonChat/CommonChat";

const CommonChatPage = () => {
    return (
        <div>
            <h2><WechatOutlined/> Общий чат</h2>
            <Divider/>
            <CommonChat/>
        </div>
    )
}


export default CommonChatPage;