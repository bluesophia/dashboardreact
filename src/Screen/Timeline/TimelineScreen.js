import React, { Component } from 'react';
import { TimelineBubble }  from '../Timeline/TimelineExports';
import './TimelineScreen.css'

class TimelineScreen extends Component {
    render(){
        return(
            <div className="timelinebubble-div">
                <TimelineBubble />
            </div>
        )
    }
}

export default TimelineScreen;