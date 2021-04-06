import React from 'react';

import ActionLog from '../components/action-log/action-log.jsx';

class LogTab extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {

        return (
            <ActionLog />
        );
    }
}

export default LogTab;
