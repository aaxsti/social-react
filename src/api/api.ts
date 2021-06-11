import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6395d35c-2111-4d92-a3c3-f0a81868a921"
    }
});

// 6a3eaab1-e015-4834-8a3d-4dbe63a05c04 - aaxsti

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export type GetItemsType<D = {}> = {
    items: Array<D>
    totalCount: number
    error: string | null
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}