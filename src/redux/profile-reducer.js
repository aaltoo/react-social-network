const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 0, message: 'Hi how are ya?', likeCount: 12},
    { id: 1, message: 'whassup?', likeCount: 11},
    { id: 2, message: 'I am so cooool', likeCount: 0}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export let addPostActionCreator = () => ({ type: ADD_POST })
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer