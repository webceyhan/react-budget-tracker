import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { App } from './App';
import { BudgetTrackerContextProvider } from './context/budget-tracker';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BudgetTrackerContextProvider>
            <App />
        </BudgetTrackerContextProvider>
    </React.StrictMode>
);
