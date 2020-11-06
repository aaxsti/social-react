import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "31c269a2-4de2-4018-98f9-0e5ea8f600fd"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    userFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data;
            });
    },

    userUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
};


export const getUser = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
}
