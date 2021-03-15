import React, {FC} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}


const Header:FC<PropsType> = ({isAuth, login, logout}) => {
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