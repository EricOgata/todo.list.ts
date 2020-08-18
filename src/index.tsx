import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import { AppStateProvider } from './App/AppStateContext';

ReactDOM.render(
    <AppStateProvider>
        <App />
    </AppStateProvider>,
    document.getElementById('root'),
);
