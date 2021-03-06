import React, { Component } from 'react';
import CardAlertDifferentColor  from '../../../Components/CardAlertDifferentColor/CardAlertDifferentColor';
import CardAlertDissmissal  from '../../../Components/CardAlertDissmissal/CardAlertDissmissal';
import CardAlertwithImg  from '../../../Components/CardAlertwithImg/CardAlertwithImg';
import './AlertRectangle.css'

class AlertRectangle extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <CardAlertDifferentColor />
                            <CardAlertDissmissal />
                            <CardAlertwithImg />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertRectangle;