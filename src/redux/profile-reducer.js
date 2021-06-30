import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        {id: 0, message: 'Hi how are ya?', likeCount: 12},
        {id: 1, message: 'whassup?', likeCount: 11},
        {id: 2, message: 'I am so cooool', likeCount: 0}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.message,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export let addPost = (newPostText) => ({ type: ADD_POST, message: newPostText })
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export let setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response))
            })
    }
}

export const updateStatus = (status) => {
    return () => {
        profileAPI.updateStatus(status)
            .then(response => {
                console.log(response)
            })
    }
}

export default profileReducer