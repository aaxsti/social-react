import {DialogMessageType, DialogType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./store/redux-store";
import {FormAction} from "redux-form";
import {dialogsAPI} from "../api/dialogs-api";
import {toast} from "react-toastify";

let initialState = {
    messages: [] as Array<DialogMessageType>,
    dialogs: [] as Array<DialogType>,
    selectedUserId: 0 as number
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SET_DIALOGS":
            return {...state, dialogs: action.dialogs}
        case "SN/DIALOGS/SET_DIALOG_MESSAGES":
            return {...state, messages: action.messages}
        case "SN/DIALOGS/SET_SELECTED_USER":
            return {...state, selectedUserId: action.userId}
        case "SN/DIALOGS/DELETE_DIALOG_MESSAGE":
            return {...state, messages: state.messages.filter(m => m.id !== action.messageId)}
        default:
            return state;
    }
}

export const actions = {
    setDialogs: (dialogs: Array<DialogType>) => ({type: 'SN/DIALOGS/SET_DIALOGS', dialogs} as const),
    setDialogMessages: (messages: Array<DialogMessageType>) => ({
        type: 'SN/DIALOGS/SET_DIALOG_MESSAGES',
        messages
    } as const),
    setSelectedUser: (userId: number) => ({type: 'SN/DIALOGS/SET_SELECTED_USER', userId} as const),
    deleteDialogMessage: (messageId: string) => ({type: 'SN/DIALOGS/DELETE_DIALOG_MESSAGE', messageId} as const)
}

export const startDialog = (userId: number): ThunkType => async () => {
    await dialogsAPI.startDialog(userId);
}

export const getDialogs = (): ThunkType => async (dispatch) => {
    try {
        let data = await dialogsAPI.getDialogs();
        dispatch(actions.setDialogs(data));
    } catch (e) {
        toast.info(e)
    }
}

export const getDialogMessages = (userId: number): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.getDialogMessages(userId);
    dispatch(actions.setDialogMessages(data.items));
    dispatch(actions.setSelectedUser(userId))
}

export const sendDialogMessage = (userId: number, body: string): ThunkType => async (dispatch) => {
    await dialogsAPI.sendDialogMessage(userId, body);
    await dispatch(getDialogMessages(userId));
}

export const deleteDialogMessage = (messageId: string): ThunkType => async (dispatch) => {
    await dialogsAPI.deleteDialogMessage(messageId);
    dispatch(actions.deleteDialogMessage(messageId))
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>