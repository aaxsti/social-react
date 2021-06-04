import React, {FC} from "react";
import s from "../../pages/UsersPage/Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {Avatar, Button} from "antd";
import BelarusFlag from "../../assets/images/belarus.svg";
import {UserAddOutlined, UserDeleteOutlined} from "@ant-design/icons";
import Item from "antd/es/list/Item";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <Item style={{backgroundColor: '#f0f2f5', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.12)', marginTop: 15, borderRadius: 2}}>
            <Item.Meta
                avatar={<NavLink to={'/profile/' + user.id}>
                    <Avatar src={user.photos.small != null ? user.photos.small : userPhoto}
                            size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80}}/>
                </NavLink>}
                title={user.name}
                description={
                    <div>
                        {user.status ? user.status : ' '}

                        <div>
                            <img style={{padding: '0 0 3px 0', width: 15}}
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
        </Item>
    )
}

export default User;