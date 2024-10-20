import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import TitleBar from './components/TitleBar';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <App />
    </Provider>
);

createRoot(document.getElementById('titlebar')!).render(
    <Provider store={store}>
        <TitleBar />
    </Provider>
);