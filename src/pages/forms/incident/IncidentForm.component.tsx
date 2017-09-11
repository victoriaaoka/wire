import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import DatePicker from 'react-toolbox/lib/date_picker';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import TimePicker from 'react-toolbox/lib/time_picker';
const datetime = new Date();

import './Incident.scss';

const categories = [
    { value: 1 , label: 'Theft' },
    { value: 2 , label: 'Injury' },
];

class IncidentReport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            categorySelected: null,
            dateOfOccurence: datetime,
            description: '',
            timeOfOccurrence: datetime,
            witnesses: '',
        };

        this.submitIncident = this.submitIncident.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    }

    public submitIncident() {
        //
    }

    public render() {
        return(
            <div className="incident-form">
                <div className="title"> Report an Incident</div>
                <Dropdown
                    auto
                    source={categories}
                    label= "Select Incident Category"
                    value = {this.state.categorySelected}
                    onChange={(value) => this.handleChange('categorySelected', value)}
                    disabled = {false}
                />
                <Input
                    multiline type= "text"
                    label="Description"
                    rows={4}
                    onChange={(value) => this.handleChange('description', value)}
                    value={this.state.description}
                />
                <DatePicker
                    label="Date Incident Occured"
                    sundayFirstDayOfWeek
                    onChange={(value) => this.handleChange('dateOfOccurence', value)}
                    value={this.state.dateOfOccurence}
                />
                <TimePicker
                    label="Time Incident Occured"
                    onChange={(value) => this.handleChange('timeOfOccurrence', value)}
                    value={this.state.timeOfOccurrence}
                />
                <Input
                    type="text"
                    label="Any Witnesses?"
                    onChange={(value) => this.handleChange('witnesses', value)}
                    value={this.state.witnesses}
                />
                <div className="inline">
                    <Button icon="cancel" label="Cancel" className="btn-cancel" raised  />
                    <Button
                        icon="send"
                        label="Submit"
                        onClick={this.submitIncident}
                        className="btn-success"
                        raised
                        primary
                    />
                </div>
            </div>
        );
    }
}

export default IncidentReport;
