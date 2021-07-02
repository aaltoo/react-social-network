import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 0, message: 'Hi how are ya?', likeCount: 12},
        {id: 1, message: 'whassup?', likeCount: 11},
        {id: 2, message: 'I am so cooool', likeCount: 0}
    ]
}

test('length of posts should be incremented', () => {

    let action = addPost('yo guys')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
});

test('message of 4th post should be yo guys', () => {

    let action = addPost('yo guys')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('yo guys')
});

test('post should be deleted', () => {

    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});