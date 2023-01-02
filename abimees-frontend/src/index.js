import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import {store} from './_store';
import {App} from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// setup fake backend
import {fakeBackend} from './_helpers';

fakeBackend();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
