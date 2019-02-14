import React, { Component } from 'react';
import CardAlertToaster  from '../../../Components/CardAlertToaster/CardAlertToaster';

class Toast extends Component {
    render(){
        return(
            <div>
                <div><CardAlertToaster /></div>
            </div>
        )
    }
}

export default Toast;