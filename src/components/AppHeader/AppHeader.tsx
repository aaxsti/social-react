import React from 'react';
import {Avatar, Button, Col, Row} from "antd";
import Logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthorizedUserAvatar, selectAuthorizedUserEmail, selectIsAuth} from "../../selectors/auth-selectors";
import {logout} from "../../redux/auth-reducer";
import {
    HeaderLogo,
    HeaderLogoLink,
    HeaderLogoWrapper,
    HeaderUserAvatarLink,
    HeaderUserEmail,
    HeaderWrapper} from './AppHeader.styled';

const AppHeader = () => {
    const isAuth = useSelector(selectIsAuth)
    const authorizedUserEmail = useSelector(selectAuthorizedUserEmail)
    const authorizedUserAvatar = useSelector(selectAuthorizedUserAvatar)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <HeaderWrapper>
            <Row>
                <HeaderLogoWrapper flex="1 1 50px">
                    <HeaderLogo src={Logo} alt='App logo'/>
                    <HeaderLogoLink to='/profile'>
                        <HeaderUserEmail>{authorizedUserEmail} </HeaderUserEmail>
                    </HeaderLogoLink>
                </HeaderLogoWrapper>
                {isAuth
                    ? <>
                        <Col flex="0 1 190px">
                            <HeaderUserAvatarLink to="/profile">
                                <Avatar src={authorizedUserAvatar} size={"large"}/>
                            </HeaderUserAvatarLink>
                            <Button onClick={logoutCallback}>
                                Выйти
                            </Button>
                        </Col>
                    </>
                    : <Col flex="0 1 120px">
                        <Button>
                            <Link to={'/login'}>
                                Войти
                            </Link>
                        </Button>
                    </Col>
                }
            </Row>
        </HeaderWrapper>
    );
}

export default AppHeader;