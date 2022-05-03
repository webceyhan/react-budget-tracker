import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { App } from './App';
import { TransactionContextProvider } from './context/transaction';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <TransactionContextProvider>
            <App />
        </TransactionContextProvider>
    </React.StrictMode>
);
