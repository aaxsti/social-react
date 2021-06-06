import {instance, APIResponseType} from "./api";

export const dialogsAPI = {
    startDialog(userId: number) {
        return instance.put<APIResponseType>(`dialogs/${userId}`).then(res => res.data);
    },

    getDialogs() {
        return instance.get('dialogs').then(res => res.data);
    },

};