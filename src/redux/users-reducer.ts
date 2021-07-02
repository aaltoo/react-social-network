import {usersAPI} from "../api/api";
import {PhotosType, UserType} from "../types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 11,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action : any) : InitialState => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId : number) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId : number) => ({type: UNFOLLOW, userId})
export const setUsers = (users : Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage : number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (count : number) => ({type: SET_TOTAL_USERS_COUNT, count})
export const toggleIsFetching = (isFetching : boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFetching : boolean, userId : number) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })

export const requestUsers = (page : number, pageSize : number) => async (dispatch : any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId : number) => async (dispatch : any) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}

export const unfollow = (userId : number) => async (dispatch : any) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await usersAPI.unfollow(userId)
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}

export default usersReducer