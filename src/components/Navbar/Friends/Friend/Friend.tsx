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
        <Col style={{padding: '8px 8px 0 0'}}>
            <NavLink to={'/profile/' + friend.id}>
                <Card
                    hoverable
                    style={{width: 150}}
                    cover={<img alt="friend photo"
                                src={friend.photos.small != null ? friend.photos.small : userPhoto}/>}
                >
                    <Meta title={friend.name} description="ГГУ им. Ф. Скорины"/>
                </Card>
            </NavLink>
        </Col>
    )
};

export default Friend;