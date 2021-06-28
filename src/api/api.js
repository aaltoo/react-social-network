import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3045492f-9e21-4f17-8ddd-7a6988b5503a"
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    me: () => {return instance.get(`auth/me`)}
}