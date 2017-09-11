import * as React from 'react';

// components
import { List } from 'react-toolbox/lib/list';
import Incident from '../../components/incident/Incident.component';

const IncidentsList = ({incidents}) => {
    if (!incidents.length) {
        return <div>No incidents to display</div>;
    }
    return (
        <List className="incident-list">
            {
                incidents.map((incident) => <Incident key={incident.id} />)
            }

        </List>
    );
};

export default IncidentsList;
