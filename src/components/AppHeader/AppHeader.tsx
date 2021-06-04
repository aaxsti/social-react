import React from 'react';
import {Header} from "antd/es/layout/layout";
import styled from "styled-components";
import {Avatar, Button, Col, Row} from "antd";
import Logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthorizedUserAvatar, selectAuthorizedUserEmail, selectIsAuth} from "../../selectors/auth-selectors";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store/redux-store";

const HeaderLogo = styled.img`
  width: 40px;
`

const HeaderLogoWrapper = styled(Col)`
  padding-left: 120px;
`

const HeaderUserAvatarLink = styled(Link)`
  padding-right: 30px;
`

const HeaderLogoLink = styled(Link)`
  color: black;

  &:hover {
    color: #414141;
    text-decoration: underline;
  }
`


const AppHeader = () => {
    const isAuth = useSelector(selectIsAuth)
    const authorizedUserEmail = useSelector(selectAuthorizedUserEmail)
    const authorizedUserAvatar = useSelector(selectAuthorizedUserAvatar)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <Header style={{backgroundColor: '#979ea9'}}>
            <Row>
                <HeaderLogoWrapper flex="1 1 50px">
                    <HeaderLogo src={Logo} alt='App logo'/>
                    <HeaderLogoLink to='/profile'>
                        <span style={{paddingLeft: 63}}>{authorizedUserEmail} </span>
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
        </Header>
    );
}

export default AppHeader;