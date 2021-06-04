import React, {FC, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import AppFooter from "./components/AppFooter/AppFooter";
import {selectInitialized} from "./selectors/app-selectors";
import AppSidebar from "./components/AppSidebar/AppSidebar";
import AppContent from "./components/AppContent/AppContent";
import AppHeader from "./components/AppHeader/AppHeader";
import styled from 'styled-components';
import Preloader from "./components/common/Preloader/Preloader";

const MainFrameWrapper = styled(Layout)`
  margin: 0 auto;
  min-width: 1100px;
  padding: 30px 0 0 0;
`

export const App: FC<PropsType> = () => {
    const initialized = useSelector(selectInitialized)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    // if (!initialized) {
    //     return <div style={{paddingLeft: '45%', paddingTop: 300}}><Preloader/></div>
    // }

    return (
        <Layout>
            <AppHeader/>
            <MainFrameWrapper>
                <AppSidebar/>
                <AppContent/>
            </MainFrameWrapper>
            <AppFooter/>
        </Layout>
    )
}

type PropsType = {}

export default App;