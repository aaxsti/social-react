import React, {FC} from 'react';
import {UserType} from "../../../../types/types";
import {Card, Col} from "antd";
import Meta from "antd/es/card/Meta";
import userPhoto from "../../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

type PropsType = {
    friend: UserType
}

const Friend: FC<PropsType> = ({friend}) => {
    return (
        <Col style={{margin: '0 auto', padding: '10px 10px 0 0'}}>
            <NavLink to={'/profile/' + friend.id}>
                <Card
                    bordered={true}
                    hoverable
                    style={{width: 150}}
                    cover={<img
                        alt="friend photo"
                        src={friend.photos.large != null ? friend.photos.large : userPhoto}/>
                    }
                >
                    <Meta title={friend.name} description={friend.status && friend.status.length >= 20 ? `${friend.status.slice(0, 20)}...` : friend.status}/>


                </Card>
            </NavLink>
        </Col>
    )
};

export default Friend;