import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "daf39da5-e47d-49b8-9618-bc257b6a4144"
    }
});

// daf39da5-e47d-49b8-9618-bc257b6a4144 - nearthas
// 47ab78ae-bdff-460a-bd32-3df28c0e5d86 - aaxsti

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