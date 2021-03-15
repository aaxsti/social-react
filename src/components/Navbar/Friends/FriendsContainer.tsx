import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {FriendType, UserType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    friends: Array<FriendType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: state.sidebar.friends
    }
};

let FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;