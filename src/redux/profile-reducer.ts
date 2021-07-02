import {profileAPI} from "../api/api";
import { PostType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'


let initialState = {
    posts: [
        {id: 0, message: 'Hi how are ya?', likeCount: 12},
        {id: 1, message: 'whassup?', likeCount: 11},
        {id: 2, message: 'I am so cooool', likeCount: 0}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action : any) : InitialStateType => {
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        default:
            return state
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    message: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}

export let addPost = (message: string) : AddPostActionType => ({ type: ADD_POST, message })
export let setUserProfile = (profile : ProfileType) : SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
export let setStatus = (status : string) : SetStatusActionType => ({ type: SET_STATUS, status })
export let deletePost = (id : number) : DeletePostActionType => ({ type: DELETE_POST, id })

export const getProfile = (userId : number) => async (dispatch : any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}


export const getStatus = (userId : number) => async (dispatch : any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status : string) => async (dispatch : any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer