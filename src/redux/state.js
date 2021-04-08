let state = {
    profilePage: {
        posts: [
            { id: 0, message: 'Hi how are ya?', likeCount: 12},
            { id: 1, message: 'whassup?', likeCount: 11},
            { id: 2, message: 'I am so cooool', likeCount: 0},
        ],
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
    }
}

export default state