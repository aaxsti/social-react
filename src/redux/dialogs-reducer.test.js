import React from "react";
import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";


let state = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Ку!'},
    ]
};

test('sending message should be correct', () => {
    let action = sendMessageCreator('wazzup');

    let newState = dialogsReducer(state, action);

    expect(newState.messages[3].message).toBe('wazzup');
});

test('length of messages should be incremented', () => {
    let action = sendMessageCreator('wazzup');

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(4);
});