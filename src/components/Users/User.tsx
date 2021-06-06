import React, {FC} from "react";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {Avatar, Button} from "antd";
import BelarusFlag from "../../assets/images/belarus.svg";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import Item from "antd/es/list/Item";
import {CountryFlagIcon, UserItem } from "./User.styled";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <UserItem>
            <Item.Meta
                avatar={
                    <NavLink to={'/profile/' + user.id}>
                        <Avatar
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80}}
                        />
                    </NavLink>
                }
                title={user.name}
                description={
                    <div>
                        {user.status ? user.status : ' '}

                        <div>
                            <CountryFlagIcon
                                  src={BelarusFlag}
                                  alt={'Country flag'}/> {"Беларусь"}
                        </div>
                    </div>
                }
            />
            <div>
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
            </div>
        </UserItem>
    )
}

export default User;