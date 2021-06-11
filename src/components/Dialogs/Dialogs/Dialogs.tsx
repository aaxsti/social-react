import React, {FC} from "react";
import {DialogType} from "../../../types/types";
import {DialogsList, DialogsListCol} from "./Dialogs.styled";
import Dialog from "../Dialog/Dialog";

const Dialogs: FC<{ dialogs: Array<DialogType> }> = ({dialogs}) => {

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