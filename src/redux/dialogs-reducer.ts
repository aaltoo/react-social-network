const SEND_MESSAGE = 'SEND-MESSAGE'

type MessageType = {
  id: number
  message: string
}

type DialogType = {
  id: number,
  name: string
}

let initialState = {
  messages: [
    { id: 1, message: 'whassup?'},
    { id: 2, message: 'Yooo'},
    { id: 3, message: 'What\'s been up?'},
  ] as Array<MessageType>,
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Victor' },
  ] as Array<DialogType>
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action : any) => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  message: string
}

export let sendMessage = (message : string) : SendMessageCreatorActionType => ({ type: SEND_MESSAGE, message })

export default dialogsReducer