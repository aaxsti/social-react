const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;