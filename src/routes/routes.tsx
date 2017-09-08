import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Dashboard from '../pages/dashboard/DashboardPage.component';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    </Router>
);

export default Routes;

