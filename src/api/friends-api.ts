import {GetItemsType, instance} from "./api";

export const friendsAPI = {
    getFriends(friend = true){
        return instance.get<GetItemsType>(`friends/${friend}`).then(res => res.data)
    }
}