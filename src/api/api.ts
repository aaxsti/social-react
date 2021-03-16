import axios from "axios";
import {ProfileType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "31c269a2-4de2-4018-98f9-0e5ea8f600fd"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired= 10
}

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type UserFollowUnfollowType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    userFollow(userId: number) {
        return instance.post<UserFollowUnfollowType>(`follow/${userId}`, {});
    },

    userUnfollow(userId: number) {
        return instance.delete<UserFollowUnfollowType>(`follow/${userId}`);
    },

    getProfile(userId: number | null) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    }
};

type GetProfileType = ProfileType;

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<GetProfileType>(`profile/${userId}`);
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },

    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }
};

type MeResponseType = {
    data: {
        id: number
        email: string,
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};