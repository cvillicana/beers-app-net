import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import './index.scss'

import 'bootstrap/dist/css/bootstrap.css';

render((
    <App />
), document.getElementById('root'));

serviceWorker.unregister();
