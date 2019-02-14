import React, { Component } from 'react';
import CardAlertDifferentColor  from '../../../Components/CardAlertDifferentColor/CardAlertDifferentColor';
import './AlertRectangle.css'

class AlertRectangle extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <CardAlertDifferentColor />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertRectangle;