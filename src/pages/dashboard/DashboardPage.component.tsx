import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/IncidentAction';

// styles
import './DashboardPage.scss';

class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div className="dashboard">
                Dashboard
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