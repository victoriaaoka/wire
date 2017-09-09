import * as React from 'react';
import * as actions from '../../actions/IncidentAction';
import { connect, Dispatch } from 'react-redux';
class Dashboard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return(
            <div>Dashboard</div>
        );
    }

    public componentDidMount() {
        this.props.loadIncidents();
        console.log(this.props.incidents);
    }
}

export function mapStateToProps(incident: any) {
    console.log('in dashboard', incident);
    return {
        incident,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IncidentAction>) {
    return {
        loadIncidents: ()=> dispatch(actions.loadIncidents()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);