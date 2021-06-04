import {DialogType, MessageType} from "../types/types";
import {InferActionsTypes} from "./store/redux-store";

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'qq'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
        {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
        {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
        {id: 4, name: 'Stas', imgLink: 'https://picsum.photos/80/80'},
        {id: 5, name: 'Sasha', imgLink: 'https://picsum.photos/90/90'},
    ] as Array<DialogType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND_MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>