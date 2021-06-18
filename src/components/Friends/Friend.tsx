import React, {FC} from 'react';
import {UserType} from "../../types/types";
import Meta from "antd/es/card/Meta";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {FriendElement, FriendElementCard} from './Friend.styled';

type PropsType = {
    friend: UserType
}

const Friend: FC<PropsType> = ({friend}) => {
    return (
        <FriendElement>
            <NavLink to={'/profile/' + friend.id}>
                <FriendElementCard
                    bordered={true}
                    hoverable
                    cover={<img
                        alt="friend element"
                        src={friend.photos.large != null ? friend.photos.large : userPhoto}/>
                    }
                >
                    <Meta
                        title={friend.name}
                        description={friend.status && friend.status.length >= 20 ?
                            `${friend.status.slice(0, 20)}...`
                            : friend.status}/>
                </FriendElementCard>
            </NavLink>
        </FriendElement>
    )
};

export default React.memo(Friend);