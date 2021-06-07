import {DialogMessageType, DialogType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./store/redux-store";
import {FormAction} from "redux-form";
import {dialogsAPI} from "../api/dialogs-api";

let initialState = {
    messages: [] as Array<DialogMessageType>,
    dialogs: [] as Array<DialogType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SET_DIALOGS":
            return {...state, dialogs: action.dialogs}
        case "SN/DIALOGS/SET_DIALOG_MESSAGES":
            return {...state, messages: action.messages}
        default:
            return state;
    }
}

export const actions = {
    setDialogs: (dialogs: Array<DialogType>) => ({type: 'SN/DIALOGS/SET_DIALOGS', dialogs} as const),
    setDialogMessages: (messages: Array<DialogMessageType>) => ({type: 'SN/DIALOGS/SET_DIALOG_MESSAGES', messages} as const)
}

export const startDialog = (userId: number): ThunkType => async () => {
    await dialogsAPI.startDialog(userId);
}

export const getDialogs = (): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.getDialogs();
    dispatch(actions.setDialogs(data));
}

export const getDialogMessages = (userId: number): ThunkType => async (dispatch) => {
    let data = await dialogsAPI.getDialogMessages(userId);
    console.log(data)
    dispatch(actions.setDialogMessages(data.items));
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>