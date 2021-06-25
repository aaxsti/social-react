import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {getDialogMessages} from "../../../redux/dialogs-reducer";
import {DialogDate, DialogItem, DialogItemInfo, DialogItemRight} from "./Dialog.styled";
import {Avatar, Col} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";

type PropsType = {
    hasNewMessage: boolean
    lastUserActivityDate: string
    newMessagesCount: number
    photo: string | null
    userName: string
    userId: number
}

const Dialog: FC<PropsType> = ({
                                   hasNewMessage,
                                   photo,
                                   userName,
                                   lastUserActivityDate,
                                   newMessagesCount,
                                   userId
                               }) => {
    const dispatch = useDispatch();
    const [selectedDialog, setSelectedDialog] = useState<"1" | "0">("0")

    const formattedDate = lastUserActivityDate
            .substr(5, 5)
            .split('-').join('.') + ' в '
        + lastUserActivityDate.substr(11, 5);

    const handleSelect = () => {
        setSelectedDialog("1")
        dispatch(getDialogMessages(userId))
    }

    return (
        <DialogItem
            hasnewmessage={hasNewMessage}
            selecteddialog={selectedDialog}
            onClick={handleSelect}>
            <Col>
                <Avatar size={'large'} src={photo}/>
            </Col>
            <DialogItemInfo>
                <span>{userName}</span>
                <DialogDate>{formattedDate}</DialogDate>
            </DialogItemInfo>
            <DialogItemRight>
                <span>{newMessagesCount !== 0 && newMessagesCount} </span>
                <CloseCircleOutlined/>
            </DialogItemRight>
        </DialogItem>
    );
}

export default Dialog;