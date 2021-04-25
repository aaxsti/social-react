import {NewsType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {NewsAPI} from "../api/news-api";

let initialState: NewsType = {
    list: [],
    size: 4,
    page: 2,
    preloader: true
}

const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/NEWS/FIND_CITY':
            return {...state, list: [...state.list, ...action.data], preloader: false}
        default:
            return state
    }
}

export const actions = {
    setNews: (data: Array<any>) => ({type: 'SN/NEWS/FIND_CITY', data} as const),
}

export const requestNews = (size: number): ThunkType => {
    return async (dispatch) => {
        let response = await NewsAPI.findApi(size)
        dispatch(actions.setNews(response.data))
    }
}

export default newsReducer;

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>