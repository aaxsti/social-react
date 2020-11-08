import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {authAPI} from "../../api/api";
import {NavLink} from "react-router-dom";


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
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    authAPI.userUnfollow(u.id)
                                        .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            }
                                        );

                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    authAPI.userFollow(u.id)
                                        .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
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
                </div>
            )}
        </div>
    )
}


export default Users;