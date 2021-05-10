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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
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
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._callSubscriber(this._state)
    }
}

window.store = store
export default store
