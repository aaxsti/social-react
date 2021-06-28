import React, {FC} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {SignUpPage} from "../../pages/SignUpPage/SignUpPage";
import {BackTop} from "antd";
import withSuspense from "../../hoc/withSuspense";
import {UpOutlined} from "@ant-design/icons";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import UsersPage from '../../pages/UsersPage/UsersPage';
import {AppContentWrapper, BackTopStyled} from './AppContent.styled';
import LoginPage from "../../pages/LoginPage/LoginPage";

const ProfilePage = React.lazy(() => import('../../pages/ProfilePage/ProfilePage'))
const NewsPage = React.lazy(() => import('../../pages/NewsPage/NewsPage'))
const FriendsPage = React.lazy(() => import('../../pages/FriendsPage/FriendsPage'))
const InfoPage = React.lazy(() => import('../../pages/InfoPage/InfoPage'))
const CommonChatPage = React.lazy(() => import('../../pages/CommonChatPage/CommonChatPage'))
const DialogsPage = React.lazy(() => import('../../pages/DialogsPage/DialogsPage'))

const SuspendedProfilePage = withSuspense(ProfilePage)
const SuspendedNewsPage = withSuspense(NewsPage)
const SuspendedFriendsPage = withSuspense(FriendsPage)
const SuspendedInfoPage = withSuspense(InfoPage)
const SuspendedCommonChatPage = withSuspense(CommonChatPage)
const SuspendedDialogsPage = withSuspense(DialogsPage)

type PropsType = {}

const AppContent: FC<PropsType> = () => {
    return (
        <AppContentWrapper>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                <Route path='/profile/:userId?' render={() => <SuspendedProfilePage/>}/>
                <Route path='/news' render={() => <SuspendedNewsPage/>}/>
                <Route path='/users' render={() => <UsersPage/>}/>
                <Route path='/friends' render={() => <SuspendedFriendsPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
                <Route path='/signup' render={() => <SignUpPage/>}/>
                <Route path='/dialogs' render={() => <SuspendedDialogsPage/>}/>
                <Route path='/commonChat' render={() => <SuspendedCommonChatPage/>}/>
                <Route path='/info' render={() => <SuspendedInfoPage/>}/>
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

export default React.memo(withRouter(AppContent));