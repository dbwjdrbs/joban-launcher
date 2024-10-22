import React from 'react';
import styled from 'styled-components';
import '../src/index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import UserAuthPage from './pages/UserAuthPage';
import HomePage from './pages/HomePage';
import MyInfoPage from './pages/MyInfoPage';
import SettingPage from './pages/SettingPage';

const Wrap = styled.div`
    height: calc(100vh - 38px);
    width: 100vw;
`;

const App: React.FC = () => {

    return (
        <>
            <HashRouter>
                <Wrap>
                    <Routes>
                        <Route path="/" element={<UserAuthPage />} />
                        <Route path="/main-page" element={<HomePage />} />
                        <Route path="/myinfo-page" element={<MyInfoPage />} />
                        <Route path="/setting-page" element={<SettingPage />} />
                    </Routes>
                </Wrap>
            </HashRouter>
        </>
    );
};

export default App;