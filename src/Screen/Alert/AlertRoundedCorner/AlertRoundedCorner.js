import React, { Component } from 'react';
import CardAlertRoundedCorner  from '../../../Components/CardAlertRoundedCorner/CardAlertRoundedCorner';
import './AlertRoundedCorner.css'

class AlertRoundedCorner extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <CardAlertRoundedCorner />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertRoundedCorner;