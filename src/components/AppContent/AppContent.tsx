import React, {FC} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import NewsPage from "../../pages/NewsPage/NewsPage";
import {LoginPage} from "../Login/LoginPage";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {BackTop} from "antd";
import withSuspense from "../../hoc/withSuspense";
import {UpOutlined} from "@ant-design/icons";
import styled from 'styled-components';
import {Content} from "antd/es/layout/layout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FriendsPage from "../../pages/FriendsPage/FriendsPage";
import UsersPage from '../../pages/UsersPage/UsersPage';

const BackTopStyled = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 14px
`
const AppContentWrapper = styled(Content)`
  border-radius: 2px;
  margin: 0 0 0 50px;
  padding: 30px;
  min-height: 300px;
  display: flex;
  background-color: white
`

const ProfilePage = React.lazy(() => import('../../pages/ProfilePage/ProfilePage'))
const ChatPage = React.lazy(() => import('../../pages/ChatPage/ChatPage'))

const SuspendedProfilePage = withSuspense(ProfilePage)
const SuspendedChatPage = withSuspense(ChatPage)

const AppContent: FC<PropsType> = () => {
    return (
        <AppContentWrapper>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={() => <SuspendedProfilePage/>}/>
                <Route path='/news' render={() => <NewsPage/>}/>
                <Route path='/users' render={() => <UsersPage/>}/>
                <Route path='/friends' render={() => <FriendsPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/signup' render={() => <SignUpPage/>}/>
                <Route path='/chat' render={() => <SuspendedChatPage/>}/>
                <Route path='*' render={() => <ErrorPage/>}/>
            </Switch>
            <BackTop>
                <BackTopStyled>
                    <UpOutlined/>
                </BackTopStyled>
            </BackTop>
        </AppContentWrapper>
    );
}

type PropsType = RouteComponentProps & {}

export default withRouter(AppContent);