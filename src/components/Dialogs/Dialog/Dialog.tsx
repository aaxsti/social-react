import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {getDialogMessages} from "../../../redux/dialogs-reducer";
import {DialogDate, DialogItem, DialogItemInfo, DialogItemRight} from "./Dialog.styled";
import {Avatar, Col} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {formatDate} from "../../../utils/format-date";

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
                <NavLink to={'/profile/' + userId}>
                    <Avatar size={'large'} src={photo}/>
                </NavLink>
            </Col>
            <DialogItemInfo>
                <span>{userName}</span>
                <DialogDate>{formatDate(lastUserActivityDate)}</DialogDate>
            </DialogItemInfo>
            <DialogItemRight>
                <span>{newMessagesCount !== 0 && newMessagesCount} </span>
                <CloseCircleOutlined/>
            </DialogItemRight>
        </DialogItem>
    );
}

export default Dialog;