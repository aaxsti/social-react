import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likesCount: 25},
        {id: 2, message: 'Это мой первый пост', likesCount: 15},
        {id: 3, message: 'Куку', likesCount: 15},
        {id: 4, message: 'Че как?', likesCount: 15},
    ],
    profile: null,
    status: '',
    newPostText: ''
};

it('length of posts should be incremented', () => {

    // 1. test data
    let action = actions.addPostActionCreator("Maxon");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new posts should be correct', () => {

    // 1. test data
    let action = actions.addPostActionCreator("Maxon");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("Maxon");
});

it('after deleting length of messages should be decremented', () => {

    // 1. test data
    let action = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decremented if id is incorrect`, () => {

    // 1. test data
    let action = actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it(`status of profile should be correct`, () => {

    // 1. test data
    let action = actions.setStatus('hello people!');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.status).toBe('hello people!');
});
