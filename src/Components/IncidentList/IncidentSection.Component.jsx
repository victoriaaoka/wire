import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IncidentCard from './IncidentCard.Component';

// import styling
import './IncidentList.scss';

class IncidentSection extends Component {
  constructor(props) {
    super(props);
  }

  getTime = timestamp => new Date(timestamp).toLocaleTimeString();

  getDate = timestamp =>
    new Date(timestamp).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

  render() {
    const { incidentStatus, incidents } = this.props;
    return (
      <div>
        <div className="incident-title">
          <span className="incident-status">{incidentStatus}</span>
          <span className="incident-count">{incidents.length} Incidents</span>
        </div>
        <div className="incident-cards">
          {incidents.length ? (
            incidents.map(incident => (
              <IncidentCard
                key={incident.id}
                incidentId={incident.id}
                incidentSubject={incident.subject}
                incidentReportDate={`reported on ${this.getDate(incident.dateOccurred)}`}
                incidentTime={this.getTime(incident.dateOccurred)}
                incidentAsignee={incident.User.name}
                incidentFlag={incident.Level.name}
              />
            ))
          ) : (
            <span className="no-incidents"> No Incidents {this.props.incidentStatus.toUpperCase()}</span>
          )}
        </div>
      </div>
    );
  }
}

// desructure proptypes
const { string, array } = PropTypes;

IncidentSection.propTypes = {
  incidentStatus: string.isRequired,
  incidents: array.isRequired
};

export default IncidentSection;
