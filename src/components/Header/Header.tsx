import React, {FC} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header:FC<MapPropsType & DispatchPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img alt=''
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUcUCuXMald5MexzWYz8GwZAu-vqSr0JZOFw&usqp=CAU'/>

            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;