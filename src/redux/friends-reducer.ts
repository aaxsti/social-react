import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {friendsAPI} from "../api/friends-api";
import {FilterType} from "./users-reducer";

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
        console.log(1)
        let data = await friendsAPI.getFriends();
        dispatch(actions.setFriends(data.items));
    }

export default friendsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>