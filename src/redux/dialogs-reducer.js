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
  let stateCopy = Object.assign({}, state)

  switch(action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: stateCopy.newMessageBody
      }
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageBody = ''
      return stateCopy
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.newMessage
      return stateCopy
    default:
      return stateCopy
  }
}

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageBodyActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: message })

export default dialogsReducer