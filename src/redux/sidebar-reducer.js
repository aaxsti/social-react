let initialState = {
    friends: [
        {id: 1, name: 'Maxim', imgLink: 'https://picsum.photos/400/400'},
        {id: 2, name: 'Ilya', imgLink: 'https://picsum.photos/100/100'},
        {id: 3, name: 'Ivan', imgLink: 'https://picsum.photos/200/200'},
    ],
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;