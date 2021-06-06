import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {
    ExceptionOutlined,
    HeartOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    MessageOutlined,
    UserOutlined, WechatOutlined
} from "@ant-design/icons";
import {MenuWrapper, SidebarWrapper} from './AppSidebar.styled';

const AppSidebar = () => {
    return (
        <SidebarWrapper width={190}>
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
                <Menu.Divider/>
                <Menu.Item key="6">
                    <Link to="/commonChat">
                        <WechatOutlined />
                        Общий чат
                    </Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/info">
                        <InfoCircleOutlined />
                        Информация
                    </Link>
                </Menu.Item>
            </MenuWrapper>
        </SidebarWrapper>
    );
}

export default AppSidebar;