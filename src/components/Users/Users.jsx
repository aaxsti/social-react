import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>

            <div>
                {pages.map(p => {
                    return <span className={s.pageNumbers + ' ' + (props.currentPage === p && s.selectedPage)}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>

            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "31c269a2-4de2-4018-98f9-0e5ea8f600fd"
                                        }
                                    })
                                        .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                            }
                                        );

                                }}>Unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "31c269a2-4de2-4018-98f9-0e5ea8f600fd"
                                        }
                                    })
                                        .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            }
                                        );
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                                    <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                    </span>
                                    <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                    </span>
                                    </span>
                </div>)}
        </div>
    )
}


export default Users;