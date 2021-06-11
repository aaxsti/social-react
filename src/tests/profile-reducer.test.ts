import profileReducer, {actions} from "../redux/profile-reducer";
import {PostType, ProfileType} from "../types/types";

let state = {
    posts: [
        {
            id: "1", message: 'Это мой первый пост', likesCount: 5,
            date: new Date(2021, 1, 21, 17, 55)
        },
        {
            id: "2", message: 'Всем привет', likesCount: 2,
            date: new Date(2021, 3, 13, 13, 27)
        },
        {
            id: "3", message: 'Круто', likesCount: 8,
            date: new Date(2021, 2, 21, 13, 24)
        },
        {
            id: "4", message: 'Класс', likesCount: 9,
            date: new Date(2021, 1, 22, 11, 10)
        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string,
    newPostText: '' as string,
    editMode: false
}

describe("Profile reducer tests", () => {
    it('length of posts should be incremented', () => {
        let action = actions.addPostActionCreator("Максон");

        let newState = profileReducer(state, action);

        expect(newState.posts.length).toBe(5);
    });

    it('message of new posts should be correct', () => {
        let action = actions.addPostActionCreator("Максон");

        let newState = profileReducer(state, action);

        expect(newState.posts[4].message).toBe("Максон");
    });

    it('after deleting length of messages should be decremented', () => {
        let action = actions.deletePost("1");

        let newState = profileReducer(state, action);

        expect(newState.posts.length).toBe(3);
    });

    it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
        let action = actions.deletePost("10000");

        let newState = profileReducer(state, action);

        expect(newState.posts.length).toBe(4);
    });

    it(`status of profile should be correct`, () => {
        let action = actions.setStatus('Всем привет!');

        let newState = profileReducer(state, action);

        expect(newState.status).toBe('Всем привет!');
    });
});
