let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
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
}

window.state = state

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 13
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let sendMessage = (sendMessage) => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export default state