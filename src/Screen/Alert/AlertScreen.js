import React, { Component } from 'react';
import { Toast, AlertRectangle, AlertRoundedCorner }  from '../Alert/AlertExports';
class AlertScreen extends Component {
    render(){
        return(
            <div>
                <Toast />
                <AlertRectangle />
                <AlertRoundedCorner />
            </div>
        )
    }
}

export default AlertScreen;