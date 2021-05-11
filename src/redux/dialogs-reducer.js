const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageBody
      }
      state.messages.push(newMessage)
      state.newMessageBody = ''
      return state
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessage
      return state
    default:
      return state
  }
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageBodyActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: message })

export default dialogsReducer