import React, {ComponentType, FC} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BackTop, Layout, Menu} from 'antd';
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersPage} from "./components/Users/UsersContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";
import Header from "./components/Header/Header";
import ErrorSadPic from './assets/images/sad.svg'
import {
    ExceptionOutlined,
    HeartOutlined,
    HomeOutlined,
    MessageOutlined,
    UpOutlined,
    UserOutlined
} from "@ant-design/icons";
import NewsPage from "./pages/News/NewsPage";
import Friends from "./pages/Friends/Friends";
import AboutPage from "./pages/About/AboutPage";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        //dispatch thunk of global error
        alert("Some error occurred");
        // console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        const {Content, Footer, Sider} = Layout;

        return (
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px 0 180px'}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['1']}
                                // defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <Menu.Item key="1"><Link to="/profile"><HomeOutlined/> Моя
                                    страница</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/friends"><HeartOutlined/> Мои
                                    друзья</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/news"><ExceptionOutlined/> Новоости</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/users"><UserOutlined/> Пользователи</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/chat"><MessageOutlined/> Мессенджер</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 80px', minHeight: 280}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>

                                <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                                <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                                <Route path='/news' component={NewsPage}/>
                                <Route path='/users' render={() => <UsersPage/>}/>
                                <Route path='/friends' render={() => <Friends/>}/>
                                <Route path='/login' render={() => <LoginPage/>}/>
                                <Route path='/chat' render={() => <SuspendedChatPage/>}/>

                                <Route path='*' render={() => <div>404 NOT FOUND <br/><img style={{width: '40px'}}
                                                                                           src={ErrorSadPic}/>
                                </div>}/>
                            </Switch>
                            <BackTop>
                                <div className='scroll-up-button'>
                                    <UpOutlined/>
                                </div>
                            </BackTop>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center', backgroundColor: '#e8e8ed'}}>
                    <AboutPage/>
                    <br/>
                    <div style={{fontWeight: 'lighter'}}>Social Network ©2021 Created by Maxim Astapenko</div>
                </Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp: FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetworkApp;