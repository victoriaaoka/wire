import * as React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Link from 'react-toolbox/lib/link';
import Navigation from 'react-toolbox/lib/navigation';

// styles
import './Navigation.scss';

class NavigationComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <AppBar title="WIRE" rightIcon= "account_circle" className="appbar">
                <Navigation type="horizontal">
                    <Link className="link" href="/log_incident" label="Log Incident" />
                    <Link className="link" href="/incidents" label="View Incidents" />
                </Navigation>
            </AppBar>
        );
    }

    public componentDidMount() {
        //
    }
}

export default NavigationComponent;
