import dialogsReducer, {actions} from "../redux/dialogs-reducer";

let state = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'qq'},
    ],
    dialogs: [
        {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
        {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
        {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
        {id: 4, name: 'Stas', imgLink: 'https://picsum.photos/80/80'},
        {id: 5, name: 'Sasha', imgLink: 'https://picsum.photos/90/90'},
    ]
};

test('sending message should be correct', () => {
    let action = actions.sendMessage('wazzup');

    let newState = dialogsReducer(state, action);

    expect(newState.messages[3].message).toBe('wazzup');
});

test('length of messages should be incremented', () => {
    let action = actions.sendMessage('wazzup');

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(4);
});