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
  let stateCopy = Object.assign({}, state)

  switch(action.type) {
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
    default:
      return stateCopy
  }
}

export let addPost = () => ({ type: ADD_POST })
export let updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer