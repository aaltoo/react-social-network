const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 0, message: 'Hi how are ya?', likeCount: 12},
        {id: 1, message: 'whassup?', likeCount: 11},
        {id: 2, message: 'I am so cooool', likeCount: 0}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state)

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: stateCopy.newPostText,
                likeCount: 0
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText
            return stateCopy
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        default:
            return stateCopy
    }
}

export let addPost = () => ({type: ADD_POST})
export let updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer