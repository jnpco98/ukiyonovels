import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'simplebar/dist/simplebar.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Reset from './utilities/reset';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Reset />
        <App />
    </Provider>,
    document.getElementById('root')
);
