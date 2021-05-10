import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: 'Hi how are ya?', likeCount: 12},
                { id: 1, message: 'whassup?', likeCount: 11},
                { id: 2, message: 'I am so cooool', likeCount: 0}
            ],
            newPostText: ''
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
            newMessageBody: ''
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store
