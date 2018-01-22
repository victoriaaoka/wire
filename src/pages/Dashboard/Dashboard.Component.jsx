import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

// actions
import { loadIncidents, changeStatus } from '../../actions/incidentAction';
import { addNote } from '../../actions/noteAction';

// styling
import './Dashboard.scss';

// Components
import NavBar from '../../Components/NavBar/NavBar.Component';
import IncidentFilter from '../../Components/IncidentFilter/IncidentFilter.Component';
import IncidentList from '../../Components/IncidentList/IncidentList.Component';
import CircularProgressIndicator from '../../Components/Progress/Progress.Component';
import CustomButton from '../../Components/Button/Button.Component';

/**
 * @class Dashboard
 */
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterKey: 'All Countries',
      typeFilterKey: 'All Incidents',
      showNotesDialog: false,
      value: 1
    };
  }

  componentDidMount() {
    this.props.loadIncidents();
  }

  changeFilter() {
    return (key) => {
      this.setState({ filterKey: key });
    };
  }

  changeTypeFilter() {
    return (key) => {
      this.setState({ typeFilterKey: key });
    };
  }

  filterIncidents() {
    // filter by countries

    let country = [];
    if (this.state.filterKey !== 'All Countries') {
      country = this.props.incidents.filter((incident) => {
        return this.state.filterKey === incident.location_name;
      });
    }

    // filter country by  incident's Type
    if (this.state.filterKey !== 'All Incidents') {
    country = this.props.incidents.filter((incident) => {
      return this.state.typeFilterKey === incident.incident_type;
    });
  }  

    return country;
  }
  handleSelectedIncident = (selectedIncidentIndex) => {
    let selectedIncident = this.props.incidents[selectedIncidentIndex];
    this.setState({ ...selectedIncident });
  };

  handleSelectedValue = (value) => {
    if (!this.state.id ){
      alert('Please select an incident first!');
    } else {
      this.setState({ value: value });
      this.setState({ showNotesDialog: !this.state.showNotesDialog });
    }
  };

  handleClose = () => {
    this.setState({ showNotesDialog: !this.state.showNotesDialog });
  };
  /**
   * Get the notes from the text field
   * Get the updated status of the incident
   * Send it to the API end point
   */
  handleSubmit = () => {
    let noteText = this.refs.notesTextField.getValue();
    let incidentId = this.state.id;
    let statusId = this.state.value - 1;
    this.props.addNote(noteText, incidentId);
    this.props.changeStatus(statusId, incidentId);
    this.setState({ showNotesDialog: !this.state.showNotesDialog });
  };

  render() {
    const incidents = this.filterIncidents();
    const actions = [
      <CustomButton 
        label="Cancel" 
        onClick={this.handleClose}
        />,
      <CustomButton 
        label="Submit" 
        onClick={this.handleSubmit}
        />
    ];

    return (
      <div>
        <NavBar {...this.props} />

        <div className="dashboard-container">
          <IncidentFilter incident={this.state.selectedIncident} changeCountryFilter={this.changeFilter()} onSelectStatus={this.handleSelectedValue} filterByType={this.changeTypeFilter()} />
          {
            incidents.length ? <IncidentList incidents={incidents} onSelect={this.handleSelectedIncident}/> : <CircularProgressIndicator />
          }
        </div>

        <Dialog
          title={'Subject: ' + this.state.subject || null}
          actions={actions}
          modal={false}
          open={this.state.showNotesDialog}
          onRequestClose={this.handleDialog}
          actionsContainerClassName="dialogActions"
          titleClassName="dialog-title"
        >
          <TextField
            hintText="Add notes"
            fullWidth
            floatingLabelText="Add notes to the incident"
            multiLine
            rows={3}
            ref="notesTextField"
          />
        </Dialog>

      </div>
    );
  }
}

/**
 * Dashboard Component Props validation
 */
Dashboard.propTypes = {
  incidents: PropTypes.array.isRequired,
  loadIncidents: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired
};

/**
 * map state from the store to props
 * @param {*} state 
 * @returns {*} partial state
 */
const mapStateToProps = state => {
  return {
    incidents: state.incidents,
    notes: state.notes
  };
};

/**
 * map dispatch to props
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({
  loadIncidents,
  addNote,
  changeStatus
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
