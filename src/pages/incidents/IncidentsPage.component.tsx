import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/IncidentAction';

// components
import ProgressBar from 'react-toolbox/lib/progress_bar';
import NavigationComponent from '../../common/navigation/Navigation.component';
import IncidentsList from '../../components/incidentsList/IncidentLists.component';

class Incidents extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                <NavigationComponent />
                {
                    this.props.isLoading ?
                    <ProgressBar type="linear" mode="determinate" /> :
                    <IncidentsList incidents={this.props.incidents} />
                }
            </div>
        );
    }

    public componentDidMount() {
        this.props.loadIncidents();
    }
}

export function mapStateToProps(state) {
    return {
        incidents: state.incidents,
        isLoading: state.isLoading,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IncidentAction>) {
    return {
        loadIncidents: () => dispatch(actions.loadIncidents()),
    };
}

export  default connect(mapStateToProps, mapDispatchToProps)(Incidents);
