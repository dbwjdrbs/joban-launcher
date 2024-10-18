import React from 'react';
import styled from 'styled-components';
import '../src/index.css';
import UserAuthPage from './pages/UserAuthPage';
import TitleBar from './components/TitleBar';

const Wrap = styled.div`
  height: 600px;
  width: 100%;
`;

const App = () => {
    return (
        <>
            <TitleBar></TitleBar>
            <Wrap>
                <UserAuthPage></UserAuthPage>
            </Wrap>
        </>
    );
};

export default App;