import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import TitleBar from './components/TitleBar';

createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <>
            <TitleBar />
            <App />
        </>
    </React.StrictMode>
);