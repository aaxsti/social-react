import React, {FC} from "react";
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
                                   photo,
                                   userName,
                                   lastUserActivityDate,
                                   newMessagesCount,
                                   userId
                               }) => {

    const dispatch = useDispatch();

    const formattedDate = lastUserActivityDate
            .substr(5, 5)
            .split('-').join('.') + ' в '
        + lastUserActivityDate.substr(11, 5);

    const handleSelect = () => {
        dispatch(getDialogMessages(userId))
    }

    return (
        <DialogItem onClick={handleSelect}>
            <Col>
                <Avatar size={'large'} src={photo}/>
            </Col>
            <DialogItemInfo>
                <span>{userName}</span>
                <DialogDate>{formattedDate}</DialogDate>
            </DialogItemInfo>
            <DialogItemRight>
                <span>{newMessagesCount} </span>
                <CloseCircleOutlined/>
            </DialogItemRight>
        </DialogItem>
    );
}

export default Dialog;