import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectDialogs} from "../../../selectors/dialogs-selectors";
import {getDialogs} from "../../../redux/dialogs-reducer";
import Dialog from "../Dialog/Dialog";
import {DialogsList, DialogsListCol} from "./Dialogs.styled";

const Dialogs: FC = () => {
    const dialogs = useSelector(selectDialogs);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDialogs())
    }, [dispatch]);

    return (
        <DialogsListCol>
            <DialogsList>
                {dialogs.map(d => <Dialog
                    userId={d.id}
                    key={d.id}
                    userName={d.userName}
                    lastUserActivityDate={d.lastUserActivityDate}
                    newMessagesCount={d.newMessagesCount}
                    photo={d.photos.small}
                    hasNewMessage={d.hasNewMessage}
                />)}
            </DialogsList>
        </DialogsListCol>
    )
}

export default Dialogs;