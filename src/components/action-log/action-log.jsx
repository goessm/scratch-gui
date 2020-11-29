import React from 'react';
import userEventLog from '../../../node_modules/scratch-vm/src/user-logging/user-event-log.js';

class ActionLog extends React.Component {
    constructor () {
        super();

        this.state = {
            logText: 'hi'
        };
    }

    componentDidMount () {
        this.interval = setInterval(() => this.updateLogText(), 100);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    updateLogText () {
        const latestLog = userEventLog.getEventLog().slice(-5);
        const latestLogTypes = [];
        latestLog.forEach((item) => {
            latestLogTypes.push(`${item[1]}; `);
        });
        this.setState({
            logText: latestLogTypes
        });
    }

    render () {
        const {logText} = this.state;
        return (
            <div
                className="actionlog"
            >
                {logText}
            </div>
        );
    }

}

ActionLog.propTypes = {
};

export default ActionLog;
