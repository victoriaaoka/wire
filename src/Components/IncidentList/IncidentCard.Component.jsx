import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class IncidentCard extends Component {
  constructor(props) {
    super(props);
  }

  renderFlag = flagLevel => {
    if (flagLevel == 'red') {
      return <img className="flag-image" src="/assets/images/red_flag.svg" alt="red" />;
    } else if (flagLevel == 'green') {
      return <img className="flag-image" src="/assets/images/green_flag.svg" alt="green" />;
    } else {
      return <img className="flag-image" src="/assets/images/yellow_flag.svg" alt="yellow" />;
    }
  };

  render() {
    const { incidentId, incidentSubject, incidentReportDate, incidentTime, incidentAsignee, incidentFlag } = this.props;
    return (
      <div className="incident-card">
        <div className="incident-header">
          <span className="incident-subject">
            <Link to={`/timeline/${incidentId}`}>{incidentSubject}</Link>
          </span>
          <span className="incident-report-date">{incidentReportDate}</span>
        </div>
        <div className="incident-actions">
          <span className="incident-time">{incidentTime}</span>
          <span className="assigned-to">{incidentAsignee}</span>
          <span className="incident-flag">{this.renderFlag(incidentFlag)}</span>
        </div>
      </div>
    );
  }
}

const { string, number } = PropTypes;

IncidentCard.propTypes = {
  incidentId: number.isRequired,
  incidentSubject: string.isRequired,
  incidentReportDate: string.isRequired,
  incidentTime: string.isRequired,
  incidentAsignee: string.isRequired,
  incidentFlag: string.isRequired
};

export default IncidentCard;
