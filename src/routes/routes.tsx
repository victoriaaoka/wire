import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import configureStore from '../store/store';

// components
import Dashboard from '../pages/dashboard/DashboardPage.component';
import IncidentForm from '../pages/forms/incident/IncidentForm.component';
import Incidents from '../pages/incidents/IncidentsPage.component';

const store = configureStore({});

const Routes = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/incidents" component={Incidents} />
                <Route path="/log_incident" component={IncidentForm} />
            </Switch>
        </Router>
    </Provider>
);

export default Routes;
