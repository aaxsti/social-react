import {FormAction} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./store/redux-store";
import {profileAPI} from "../api/profile-api";
import {ResultCodesEnum} from "../api/api";
import {v4} from "uuid";
import {toast} from "react-toastify";

let initialState = {
    posts: [
        {id: v4(), message: 'Это мой первый пост', likesCount: 5,
            date: new Date(2021, 1, 21, 17, 55)},
        {id: v4(), message: 'Всем привет', likesCount: 2,
            date: new Date(2021, 3, 13, 13, 27)}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    editMode: false
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST':
            let newPost = {
                id: v4(),
                message: action.newPostText,
                likesCount: 0,
                date: new Date()
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PROFILE/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: string) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status));
        }
    } catch (error) {
        toast.info(error)
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.savePhoto(file);
        if (data.messages.length === 0) {
            dispatch(actions.savePhotoSuccess(data.data.photos));
        } else {
            toast.info("Отправленные данные некорректны")
        }
    } catch (error) {
        toast.info("Ошибка загрузки фото")
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(await getUserProfile(userId))
            toast.success('Данные профиля обновлены')
        } else {
            toast.info('userId can`t be null')
        }
    } else {
        toast.info(data.messages[0])
    }
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>