import React from "react";
import s from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://picsum.photos/400/400',
                followed: false,
                fullName: 'Maxim',
                status: 'Yo bruh',
                location: {city: 'Gomel', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://picsum.photos/200/200',
                followed: true,
                fullName: 'Ilya',
                status: 'I love rap',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://picsum.photos/300/300',
                followed: false,
                fullName: 'Olga',
                status: 'I love music art',
                location: {city: 'Nizhniy Novgorod', country: 'Russia'}
            }
        ]);
    }

    return (
        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>)}
        </div>
    )
};

export default Users;