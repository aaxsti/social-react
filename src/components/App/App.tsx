import React, {FC, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import AppFooter from "../AppFooter/AppFooter";
import {selectInitialized} from "../../selectors/app-selectors";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppContent from "../AppContent/AppContent";
import AppHeader from "../AppHeader/AppHeader";
import Preloader from "../common/Preloader/Preloader";
import {GlobalPreloader, MainFrameWrapper} from './App.styled';
import {initializeApp} from "../../redux/app-reducer";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {
    const initialized = useSelector(selectInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!initialized) {
        return <GlobalPreloader><Preloader/></GlobalPreloader>
    }

    return (
        <Layout>
            <AppHeader/>
            <MainFrameWrapper>
                <AppSidebar/>
                <AppContent/>
            </MainFrameWrapper>
            <AppFooter/>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Layout>
    )
}

export default React.memo(App);