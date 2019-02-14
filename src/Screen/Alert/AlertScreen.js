import React, { Component } from 'react';
import { Toast, AlertRectangle, AlertRoundedCorner, AlertWithContent }  from '../Alert/AlertExports';
class AlertScreen extends Component {
    render(){
        return(
            <div>
                <Toast />
                <AlertRectangle />
                <AlertRoundedCorner />
                <AlertWithContent />
            </div>
        )
    }
}

export default AlertScreen;