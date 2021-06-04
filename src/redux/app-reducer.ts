import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store/redux-store";

let initialState = {
    initialized: false
};

const appReducer = (state=  initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

type ThunkType = ThunkAction<any, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(actions.initializedSuccess());
    });
};

export default appReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>