import * as React from 'react';

import { ListItem } from 'react-toolbox/lib/list';

// temporary data
const leftActions = ['leftAction1', 'leftAction2', 'leftAction3'];
const rightActions = ['rightAction1', 'rightAction2', 'rightAction3'];

class Incident extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <ListItem
                avatar="https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg"
                caption="Incident title"
                legend="Incident Description"
                leftActions={leftActions}
                rightActions={rightActions}
                rightIcon="star"
                selectable
            />
        );
    }
}

export default Incident;
