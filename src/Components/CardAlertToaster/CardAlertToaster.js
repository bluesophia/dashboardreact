import React, { Component } from 'react';
import './CardAlertToaster.css'
import { ToasterButton } from '../Common/Button/ButtonExports';

class CardAlertToaster extends Component {
 render(){
     return(
        <div className="row col-lg-6">
            <div className="alert-card">
                <div className="alert-card-body">
                    <h3>Simple Toastr Alerts</h3>
                        {/* form */}
                        <ToasterButton />      
                </div>        
            </div>            
        </div>
        )
    }   
}
export default CardAlertToaster;