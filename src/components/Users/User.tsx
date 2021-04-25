import React, {FC} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {Button, Col, Row} from "antd";
import BelarusFlag from "../../assets/images/belarus.svg";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>

    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.userBlock}>
            <Row>
                <Col>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img alt="User picture" src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                         <div style={{padding: '10px 0 0 10px'}}>
                            {user.followed
                                ? <Button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id);
                                          }}>
                                    Delete friend</Button>

                                : <Button disabled={followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>
                                    Add friend</Button>
                            }
                        </div>
                    </span>
                </Col>
                <Col style={{padding: '5px 0 0 30px'}}>
                    <b>{user.name}</b>
                    <div>{user.status ? user.status : ' '}</div>
                    <div>ГГУ им. Ф. Скорины</div>
                    <div><img className={s.countryFlag}
                              src={BelarusFlag}
                              alt={'country flag'}/>{"Беларусь"}</div>
                    <div>{"Гомель"}</div>
                </Col>
            </Row>
        </div>

    )
}


export default User;