import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import createRoutes from './routes';
import App from './App';

const store = configureStore();
const routes = createRoutes();

ReactDOM.render(
    <Provider store={store}>
        <App>
            {routes}
        </App>
    </Provider>,
    document.getElementById('root')
);