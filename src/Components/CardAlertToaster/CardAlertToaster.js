import React, { Component } from 'react';
import './CardAlertToaster.css'
import { ToasterButton } from '../Common/Button/ButtonExports';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faExclamationCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

class CardAlertToaster extends Component {
    constructor(props){
        super(props);
        this.handleInfo = this.handleInfo.bind(this);
        this.handleWarning = this.handleWarning.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleDanger = this.handleDanger.bind(this);
    }

    handleInfo() {
        toast.info(
        <div className="alerttoast-card">
        <FontAwesomeIcon icon={faInfoCircle} className="alerttoast-card-header-icon"/>
        <div className="alerttoast-card-header">Welcome to Elite admin</div>
        <div className="alerttoast-card-contents">Use the predefined ones, or specify a custom position object.</div>
        </div>
        );
    }
    handleWarning() {
        toast.warning(
        <div className="alerttoast-card">
        <FontAwesomeIcon icon={faExclamationTriangle} className="alerttoast-card-header-icon"/>
        <div className="alerttoast-card-header">Welcome to Elite admin</div>
        <div className="alerttoast-card-contents">Use the predefined ones, or specify a custom position object.</div>
        </div>
        );
    }
    handleSuccess() {
        toast.success(
        <div className="alerttoast-card">
        <FontAwesomeIcon icon={faCheck} className="alerttoast-card-header-icon"/>
        <div className="alerttoast-card-header">Welcome to Elite admin</div>
        <div className="alerttoast-card-contents">Use the predefined ones, or specify a custom position object.</div>
        </div>
        );
    }
    handleDanger() {
        toast.error(
        <div className="alerttoast-card">
        <FontAwesomeIcon icon={faExclamationCircle} className="alerttoast-card-header-icon"/>
        <div className="alerttoast-card-header">Welcome to Elite admin</div>
        <div className="alerttoast-card-contents">Use the predefined ones, or specify a custom position object.</div>
        </div>
        );
    }

 render(){
     return(
        <div className="row col-lg-6">
            <div className="alert-card">
                <div className="alert-card-body">
                    <h3>Simple Toastr Alerts</h3>
                        <div className="alert-card-toaster-btn">
                            <ToasterButton 
                                backgroundColor="var(--blue)"
                                value="Info Message"
                                onClick={this.handleInfo}
                            />
                            <ToasterButton 
                                backgroundColor="var(--yellow)"
                                value="Warning Message"
                                onClick={this.handleWarning}
                            />
                            <ToasterButton 
                                backgroundColor="var(--teal)"
                                value="Success Message"
                                onClick={this.handleSuccess}
                            />
                            <ToasterButton 
                                backgroundColor="var(--red)"
                                value="Danger Message"
                                onClick={this.handleDanger}
                            />
                        </div>
                </div>        
            </div>            
        </div>
        )
    }   
}
export default CardAlertToaster;