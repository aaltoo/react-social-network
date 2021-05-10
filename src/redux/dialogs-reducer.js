const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReducer = (state, action) => {

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