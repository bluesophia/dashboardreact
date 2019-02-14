import React, { Component } from 'react';
import CardAlertToaster  from '../../../Components/CardAlertToaster/CardAlertToaster';
import './Toast.css'

class Toast extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="toast-card">
                        <div className="toast-card-body">
                            <div><CardAlertToaster /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Toast;