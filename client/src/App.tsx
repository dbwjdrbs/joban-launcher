import React from 'react';
import UserAuthPage from './pages/UserAuthPage';
import TitleBar from './components/TitleBar';
import '../src/index.css';

const App = () => {
    return (
        <>
            <TitleBar></TitleBar>
            <UserAuthPage></UserAuthPage>
        </>
    );
};

export default App;