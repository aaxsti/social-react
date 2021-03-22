import {FriendType} from "../types/types";
import {InferActionsTypes} from "./redux-store";
import {actions} from "./profile-reducer";

let initialState = {
    friends: [
        {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
        {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
        {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
    ] as Array<FriendType>,
}

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {
    return state;
}

export default sidebarReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>