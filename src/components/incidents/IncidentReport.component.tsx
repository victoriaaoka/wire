import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';
const datetime = new Date();

import './Incident.scss';

const categories = [
    { value:1, label: 'Theft' },
    { value:2, label: 'Injury' }
];   

class IncidentReport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            categorySelected: null,
            description: "",
            dateOfOccurence: datetime,
            timeOfOccurrence: datetime,
            witnesses: ""
        };
    }

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    public render() {
        return(
            <div className="incident-form">
                <div className="title"> Report an Incident</div>
                <Dropdown
                    auto
                    source={categories}
                    label='Select Incident Category'
                    value = {this.state.categorySelected}
                    onChange={this.handleChange.bind(this, 'categorySelected')}
                    disabled = {false}
                />
                <Input multiline type='text' label="Description" rows={4} onChange={this.handleChange.bind(this, "description")} value={this.state.description}/>
                <DatePicker label="Date Incident Occured" sundayFirstDayOfWeek onChange={this.handleChange.bind(this, "dateOfOccurence")} value={this.state.dateOfOccurence}/>
                <TimePicker label="Time Incident Occured" onChange={this.handleChange.bind(this, "timeOfOccurrence")} value={this.state.timeOfOccurrence} />
                <Input type='text' label="Any Witnesses?" onChange={this.handleChange.bind(this, "witnesses")} value={this.state.witnesses}/>
                <div className="inline"> 
                    <Button icon='cancel' label="Cancel" className="btn-cancel" raised  />
                    <Button icon='send' label="Submit" className="btn-success" raised primary />
                </div>
                
                
            </div>
        );
    }
}

export default IncidentReport;