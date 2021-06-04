import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./store/redux-store";
import {usersAPI} from "../api/users-api";

let initialState = {
    friends: [] as Array<UserType>
}

const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/FRIENDS/SET_FRIENDS':
            return {...state, friends: action.friends}
        default:
            return state
    }
}

export const actions = {
    setFriends: (friends: Array<UserType>) => ({type: 'SN/FRIENDS/SET_FRIENDS', friends} as const)
}

export const requestFriends = (): ThunkType =>
    async (dispatch) => {
        let data = await usersAPI.getUsers(1, 100, '', true);
        dispatch(actions.setFriends(data.items));
    }

export default friendsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>