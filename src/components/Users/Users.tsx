import React, {FC} from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>

    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: FC<PropsType> = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, onFilterChanged, ...props}) => {

    return (
        <div className={s.users}>

            <UsersSearchForm onFilterChanged={onFilterChanged}/>

            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {users.map(u => <User
                    user={u}
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)}
            </div>
        </div>
    )
}

export default Users;