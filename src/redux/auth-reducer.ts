import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./store/redux-store";
import {authAPI} from "../api/auth-api";
import {profileAPI} from "../api/profile-api";
import { toast } from "react-toastify";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    avatar: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean, avatar: string | null) => ({
        type: 'SN/AUTH/SET_USER_DATA', payload:
            {userId, email, login, isAuth, avatar}
    } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        let myAvatar = await profileAPI.getProfile(meData.data.id);
        const avatar = myAvatar.photos.small;
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true, avatar));
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData());
    } else {
        toast.info(data.messages.length > 0 ? data.messages[0] : "Some error")
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false, null));
    }
}

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>