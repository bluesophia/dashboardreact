import React, { Component } from 'react';
import { Toast, AlertRectangle }  from '../Alert/AlertExports';
class AlertScreen extends Component {
    render(){
        return(
            <div>
                <Toast />
                <AlertRectangle />
            </div>
        )
    }
}

export default AlertScreen;