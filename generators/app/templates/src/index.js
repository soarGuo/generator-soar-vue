import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/layout';
import { Provider } from 'react-redux'

import store from './redux';

const render = () => ReactDOM.render(
    (
        <Provider store={store}>
            <App></App>
        </Provider>
    ),
    document.getElementById("root")
)

render()
