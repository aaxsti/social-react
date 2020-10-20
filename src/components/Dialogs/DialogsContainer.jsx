import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {
        store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                SendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
};


export default DialogsContainer;