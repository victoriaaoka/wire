import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// styles
import './Incident.scss';

const Incident = () => {
  return (
    <div className="timeline-incident">
      <div className="incident-details">
        <div className="incident-footer-item">
          ID: 4567
          <span>
            <FlatButton className="incident-button" label="Cancel" />
            <FlatButton className="incident-button" label="Save" />
          </span>
        </div>
        <div className="incident-footer-item">
          Incident Type:
          <span>
            <FlatButton className="incident-button" label="Green" />
          </span>
        </div>
        <div className="incident-footer-item">
          Incident Type:
          <span>
            <FlatButton className="incident-button" label="Green" />
          </span>
        </div>
        <div className="incident-footer-item">
          P&C Associate:
          <span>
          <FlatButton className="incident-button" label="@User" />
          </span>
        </div>
        <div className="incident-footer">
          <span>Last Updated: 16 Nov, 2017</span>
        </div>
      </div>
    </div>
  );
};

export default Incident;
