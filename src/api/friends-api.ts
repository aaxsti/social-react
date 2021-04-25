import {GetItemsType, instance} from "./api";

export const friendsAPI = {
    getFriends() {
        return instance.get<GetItemsType>('users?friend=true')
            .then(res => res.data)
    }
}