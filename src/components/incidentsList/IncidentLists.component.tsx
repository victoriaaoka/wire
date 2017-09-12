import * as React from 'react';

// components
import Incident from '../../components/incident/Incident.component';

const IncidentsList = ({incidents}) => {
    if (!incidents.length) {
        return <div>No incidents to display</div>;
    }
    return (
        <div className="incident-list">
            {
                incidents.map((incident, index) => <Incident key={index} incident={incident} />)
            }

        </div>
    );
};

export default IncidentsList;
