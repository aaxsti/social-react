import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        SendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;