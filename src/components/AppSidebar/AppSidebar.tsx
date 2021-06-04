import React from 'react';
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {ExceptionOutlined, HeartOutlined, HomeOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";
import styled from 'styled-components';

const MenuWrapper = styled(Menu)`
  padding-top: 15px;
  height: 100%;
  border-radius: 2px;
`

const AppSidebar = () => {

    const {Sider} = Layout

    return (
        <Sider width={190} style={{borderRadius: 2}}>
            <MenuWrapper mode="inline">
                <Menu.Item key="1">
                    <Link to="/profile">
                        <HomeOutlined/>
                        Моя страница
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/friends">
                        <HeartOutlined/>
                        Мои друзья
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/news">
                        <ExceptionOutlined/>
                        Новоости
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/users">
                        <UserOutlined/>
                        Пользователи
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/chat">
                        <MessageOutlined/>
                        Мессенджер
                    </Link>
                </Menu.Item>
            </MenuWrapper>
        </Sider>
    );
}

export default AppSidebar;