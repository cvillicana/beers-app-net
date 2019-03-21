import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import './index.scss'

import { Provider } from 'react-redux';
import { store } from './_helpers/store';

import 'bootstrap/dist/css/bootstrap.css';

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
