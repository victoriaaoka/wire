import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from '../store/store';

// components
import NavigationComponent from '../common/navigation/navigation.component';
import Dashboard from '../pages/dashboard/DashboardPage.component';
const store = configureStore({});

const Routes = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route>
                <Route path="/" component={Dashboard} />
            </Route>
        </BrowserRouter>
    </Provider>
);

export default Routes;