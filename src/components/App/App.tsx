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

export const App: FC<PropsType> = () => {
    const initialized = useSelector(selectInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) {
        return <GlobalPreloader><Preloader/></GlobalPreloader>
    }

    return (
        <div>
        <Layout>
            <AppHeader/>
            <MainFrameWrapper>
                <AppSidebar/>
                <AppContent/>
            </MainFrameWrapper>
            <AppFooter/>
        </Layout>
        </div>
    )
}

type PropsType = {}

export default App;