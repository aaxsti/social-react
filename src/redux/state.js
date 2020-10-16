let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likesCount: 25},
                {id: 2, message: 'Это мой первый пост', likesCount: 15},
                {id: 3, message: 'Куку', likesCount: 15},
                {id: 4, message: 'Че как?', likesCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Ку!'},
            ],
            dialogs: [
                {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
                {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
                {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
                {id: 4, name: 'Stas', imgLink: 'https://picsum.photos/80/80'},
                {id: 5, name: 'Sasha', imgLink: 'https://picsum.photos/90/90'},
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
                {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
                {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
            ],
        },
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // наблюдатель/observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;