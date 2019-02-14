import React, { Component } from 'react';
import CardAlertWithContent  from '../../../Components/CardAlertWithContent/CardAlertWithContent';
import './AlertWithContent.css'

class AlertWithContent extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <CardAlertWithContent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertWithContent;