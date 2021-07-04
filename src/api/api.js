import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://protected-tundra-51029.herokuapp.com/https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8c8ad36b-95f7-4465-8bff-929d86088fd4"
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
    me: () => {
        return instance.get(`auth/me`)
    },
    login: (email, password, rememberMe = false) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}
