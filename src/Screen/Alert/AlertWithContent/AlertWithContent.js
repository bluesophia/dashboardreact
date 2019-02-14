import React, { Component } from 'react';
import CardAlertDissmissal  from '../../../Components/CardAlertDissmissal/CardAlertDissmissal';
import './AlertWithContent.css'

class AlertWithContent extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <CardAlertDissmissal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertWithContent;