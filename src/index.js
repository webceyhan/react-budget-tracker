import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { SpeechProvider } from '@speechly/react-client';

import { App } from './App';
import { TransactionContextProvider } from './context/transaction';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SpeechProvider appId='ad906d44-2cd0-4063-ab7f-111c095ac8e3'>
            <TransactionContextProvider>
                <App />
            </TransactionContextProvider>
        </SpeechProvider>
    </React.StrictMode>
);
