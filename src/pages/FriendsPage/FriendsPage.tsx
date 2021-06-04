import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import {requestFriends} from "../../redux/friends-reducer";
import {Input, Row} from "antd";
import Friend from "../../components/Navbar/Friends/Friend/Friend";
import {SearchOutlined} from "@ant-design/icons";
import {HeartOutlined} from "@ant-design/icons";
import Preloader from "../../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {selectIsAuth} from "../../selectors/auth-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {selectUserFriends} from "../../selectors/friends-selectors";

type PropsType = {}

const FriendsPage: FC<PropsType> = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch()

    const friends = useSelector(selectUserFriends)


    useEffect(() => {
        dispatch(requestFriends());
    }, [])


    if (!friends) {
        return <Preloader/>
    }

    return (
        <div>
            <h2 style={{paddingBottom: 9}}><HeartOutlined/> Мои друзья</h2>
            <div>
                <Input style={{width: 200}} placeholder={'Поиск...'}
                       onChange={event => {
                           setSearchTerm(event.target.value)
                       }}/>
                <SearchOutlined style={{paddingLeft: 10}}/>
            </div>
            <br/>
            <Row>
                {
                    friends
                        .filter(val => {
                            if (searchTerm === "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                        .map(f => <Friend
                            friend={f}
                            key={f.id}
                        />)
                }
            </Row>
        </div>
    );
}

export default withAuthRedirect(FriendsPage);