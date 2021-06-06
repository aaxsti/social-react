import {Avatar, List} from 'antd';
import React, {FC} from 'react';
import {CloseCircleOutlined} from "@ant-design/icons";
import styled from "styled-components";

const DialogItemRight = styled.div`
  font-size: 16px;
`

type PropsType = {
    hasNewMessage: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photo: string | null
    userName: string
}

const Dialog: FC<PropsType> = ({photo, userName, lastUserActivityDate, newMessagesCount}) => {
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar size={'large'} src={photo}/>}
                title={userName}
                description={
                    <span>
                        {lastUserActivityDate}
                    </span>
                }
            />
            <DialogItemRight>
                <span style={{color: 'gray'}}>{newMessagesCount} </span>
                <CloseCircleOutlined onClick={() => {}}/>
            </DialogItemRight>
        </List.Item>
    );
}

export default Dialog;