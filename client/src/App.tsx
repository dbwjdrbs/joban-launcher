import React from 'react';
import styled from 'styled-components';
import '../src/index.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

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
                    <Switch>
                        <Route exact path="/" component={UserAuthPage} />
                        <Route path="/main-page" component={HomePage} />
                        <Route path="/myinfo-page" component={MyInfoPage} />
                        <Route path="/setting-page" component={SettingPage} />
                    </Switch>
                </Wrap>
            </HashRouter>
        </>
    );
};

export default App;