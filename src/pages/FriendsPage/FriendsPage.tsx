import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestFriends} from "../../redux/friends-reducer";
import {Row} from "antd";
import Friend from "../../components/Friends/Friend";
import {HeartOutlined} from "@ant-design/icons";
import Preloader from "../../components/common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {selectUserFriends, selectUserFriendsAmount} from "../../selectors/friends-selectors";
import {FriendsPageHeader, FriendsSearchInput, SearchIcon} from "./FriendsPage.styled";

type PropsType = {}

const FriendsPage: FC<PropsType> = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const friends = useSelector(selectUserFriends)
    const friendsAmount = useSelector(selectUserFriendsAmount)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestFriends());
    }, [friendsAmount])

    if (!friends) {
        return <Preloader/>
    }

    return (
        <div>
            <FriendsPageHeader>
                <HeartOutlined/> Мои друзья ({friendsAmount})
            </FriendsPageHeader>
            <div>
                <FriendsSearchInput
                    placeholder={'Поиск...'}
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}/>
                <SearchIcon/>
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