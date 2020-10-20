import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
};

let FriendsContainer = connect(mapStateToProps) (Friends);


export default FriendsContainer;