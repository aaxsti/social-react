import {instance, APIResponseType, GetItemsType} from "./api";

export const dialogsAPI = {
    startDialog(userId: number) {
        return instance.put<APIResponseType>(`dialogs/${userId}`).then(res => res.data);
    },

    getDialogs() {
        return instance.get('dialogs').then(res => res.data);
    },

    getDialogMessages(userId: number) {
        return instance.get<GetItemsType>(`dialogs/${userId}/messages`).then(res => res.data);
    },

    sendDialogMessage(userId: number, body: string) {
        return instance.post(`dialogs/${userId}/messages`, {body}).then(res => res.data);
    },

};