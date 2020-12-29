import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

    return (
        <div className={s.users}>

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