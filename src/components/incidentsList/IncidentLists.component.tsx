import * as React from 'react';

const IncidentsList = ({incidents}) => {
    if (!incidents.length) {
        return <div>No incidents to display</div>;
    }
    return (
        <div className="incident-list">
            <ul>
                {
                    incidents.map((incident) => <li key={incident.id}>{incident.description}</li>)
                }
            </ul>
        </div>
    );
};

export default IncidentsList;
