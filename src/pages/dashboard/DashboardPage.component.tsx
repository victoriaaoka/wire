import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/IncidentAction';

import IncidentReport from '../forms/incident/IncidentForm.component';

import { Button } from 'react-toolbox/lib/button';
import NavigationComponent from '../../common/navigation/Navigation.component';

// styles
import './DashboardPage.scss';

class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <NavigationComponent />
                <div className = "dashboard">
                    <IncidentReport />
                    <Button icon="add" floating className="report-btn"/>
                </div>
            </div>
        );
    }

    public componentDidMount() {
        this.props.loadIncidents();
    }
}

export function mapStateToProps(incident: any) {
    return {
        incident,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IncidentAction>) {
    return {
        loadIncidents: () => dispatch(actions.loadIncidents()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
