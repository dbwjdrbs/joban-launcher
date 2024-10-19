import React from 'react';
import styled from 'styled-components';
import '../src/index.css';
import UserAuthPage from './pages/UserAuthPage';
import MainPage from './pages/MainPage';
import { HashRouter, Switch, Route } from 'react-router-dom';

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App: React.FC = () => {

    return (
        <>
            <HashRouter>
                <Wrap>
                    <Switch>
                        <Route exact path="/">
                            <UserAuthPage />
                        </Route>
                        <Route path="/main-page">
                            <MainPage />
                        </Route>
                    </Switch>
                </Wrap>
            </HashRouter>
        </>
    );
};

export default App;