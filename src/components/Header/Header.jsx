import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt=''
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUcUCuXMald5MexzWYz8GwZAu-vqSr0JZOFw&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};


export default Header;