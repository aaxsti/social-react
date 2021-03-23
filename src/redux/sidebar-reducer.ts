import {FriendType, UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {friendsAPI} from "../api/friends-api";

let initialState = {
    friends: [
        {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
        {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
        {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
    ] as Array<FriendType>,
}

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/SIDEBAR/SET_FRIENDS':
            return {...state, friends: action.friends}
        default:
            return state;
    }
}

export const actions = {
    setFriends: (friends: Array<FriendType>) => ({type: 'SN/SIDEBAR/SET_FRIENDS', friends} as const),
}

export const requestFriends = (): ThunkType =>
    async (dispatch) => {
        let data = await friendsAPI.getFriends();
        // dispatch(actions.setFriends(data.items));
    }

export default sidebarReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>