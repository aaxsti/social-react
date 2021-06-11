import React, {FC} from "react";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../types/types";
import {Avatar, Button, Col} from "antd";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import {
    CountryFlagIcon,
    UserCountry,
    UserItem,
    UserItemRow,
    UserListContent,
    UserNameLink,
    UserStatus
} from "./User.styled";
import BelarusFlag from "../../assets/images/belarus.svg";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <UserItem>
            <UserItemRow>
                <Col>
                    <NavLink to={'/profile/' + user.id}>
                        <Avatar
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80}}
                        />
                    </NavLink>
                </Col>
                <UserListContent>
                    <UserNameLink to={'/profile/' + user.id}>
                        <span>{user.name}</span>
                    </UserNameLink>
                    <UserStatus>
                        {user.status ? user.status : ' '}
                    </UserStatus>
                    <UserCountry>
                        <CountryFlagIcon
                            src={BelarusFlag}
                            alt={'Country flag'}/> Беларусь
                    </UserCountry>
                </UserListContent>
                <Col>
                    {user.followed
                        ? <Button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>
                            <UserDeleteOutlined/></Button>

                        : <Button disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            <UserAddOutlined/></Button>
                    }
                </Col>
            </UserItemRow>
        </UserItem>
    )
}

export default React.memo(User);