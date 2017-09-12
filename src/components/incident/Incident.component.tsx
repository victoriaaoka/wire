import * as React from 'react';

// styles
import './incident.scss';

// components
import Avatar from 'react-toolbox/lib/avatar';

const Incident = ({incident}) => {
    return (
        <div className="incident">
            <div className="left-content">
                <Avatar className="avatar" />
                <div className="details">
                    <p>Title</p>
                    {incident.description}
                </div>
            </div>
            <div className="right-content">
                <span className="status">{incident.status}</span>
                <div className="more-container">
                    <i className="material-icons more">more_vert</i>
                    <ul className="more-menu">
                        <li>Edit</li>
                        <li>Comment</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Incident;
