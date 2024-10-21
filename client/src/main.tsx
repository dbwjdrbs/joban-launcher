import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import TitleBar from './components/TitleBar';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = createRoot(document.getElementById('app')!);

root.render(
    <Provider store={store}>
        <TitleBar />
        <App />
    </Provider>
);
