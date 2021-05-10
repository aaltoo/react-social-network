const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi how are ya?', likeCount: 12},
                { id: 1, message: 'whassup?', likeCount: 11},
                { id: 2, message: 'I am so cooool', likeCount: 0}
            ],
            newPostText: 'Im pavlov stas'
        },
        dialogsPage: {
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
            newMessageText: 'hou are you?'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    //state changing methods
    addPost(postMessage) {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 13
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    sendMessage(sendMessage) {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        console.log(this._state.dialogsPage.newMessageText)
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        switch(action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 3,
                    message: this._state.profilePage.newPostText,
                    likeCount: 13
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break
            case 'SEND-MESSAGE':
                let newMessage = {
                    id: 4,
                    message: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                console.log(this._state.dialogsPage.newMessageText)
                this._callSubscriber(this._state)
                break
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessage
                this._callSubscriber(this._state)
                break
            default:
                console.log('wrong action type')
        }
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST })
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })

window.store = store
export default store
