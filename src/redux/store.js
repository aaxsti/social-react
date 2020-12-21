import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likesCount: 25},
                {id: 2, message: 'Это мой первый пост', likesCount: 15},
                {id: 3, message: 'Куку', likesCount: 15},
                {id: 4, message: 'Че как?', likesCount: 15},
            ],
            newPostText: '',
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
            newMessageBody: '',
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

    dispatch(action) {      // отправка action
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;