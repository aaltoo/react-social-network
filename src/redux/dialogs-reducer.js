const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  messages: [
    { id: 0, message: 'Hi how are ya?'},
    { id: 1, message: 'whassup?'},
    { id: 2, message: 'Yooo'},
    { id: 3, message: 'What\'s been up?'},
  ],
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Victor' },
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: action.message}]
      }
    default:
      return state
  }
}

export let sendMessage = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer