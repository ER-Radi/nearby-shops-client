import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import createRoutes from './routes';
import App from './App';

import 'semantic-ui-css/semantic.min.css';

const persistedState = loadState();

const store = configureStore(persistedState);
const routes = createRoutes();

store.subscribe( throttle( () => {
    saveState({
        user: store.getState().user
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App>
            {routes}
        </App>
    </Provider>,
    document.getElementById('root')
);