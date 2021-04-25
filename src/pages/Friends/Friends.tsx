import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestFriends} from "../../redux/friends-reducer";
import {AppStateType} from "../../redux/redux-store";
import Friend from "../../components/Navbar/Friends/Friend/Friend";
import {Row} from "antd";

type PropsType = {}

const Friends: FC<PropsType> = () => {
    const dispatch = useDispatch()
    const friends = useSelector((state: AppStateType) => state.friendsPage.friends)

    useEffect(() => {
        dispatch(requestFriends());
    },[])

    return (
        <div>
            <h1>Мои друзья</h1>
            <Row>
                {friends.map(f => <Friend
                    friend={f}
                    key={f.id}
                />)}
            </Row>
        </div>
    );
}

export default Friends;