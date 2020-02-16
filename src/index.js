import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App } from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';//middleware

import './css/index.css';

const store = createStore(
    reducers,
    {}, //Estado inicial
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

