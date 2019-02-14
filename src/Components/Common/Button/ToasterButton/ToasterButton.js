import React, { Component } from 'react';
import './ToasterButton.css'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPrint } from '@fortawesome/free-solid-svg-icons';

class ToasterButton extends Component {
    
    static defaultProps = {
        border: "1px solid transparent",
        backgroundColor: "var(--blue)",
        borderColor: "#00c292",
        color: "white",
        value: "Info Message",
        fontWeight: "500",
        marginBottom: "0"
    }
    render(){
        function handleClick() {
            toast.info(
            <div className="toastinfo-card">
            <FontAwesomeIcon icon={faInfoCircle} className="toastinfo-card-header-icon"/>
            <div className="toastinfo-card-header">Welcome to Elite admin</div>
            <div className="toastinfo-card-contents">Use the predefined ones, or specify a custom position object.</div>
            </div>
            );
        }
        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom, marginTop, fontSize } = this.props;

        return(
            <div className="container">
                <button 
                onClick={handleClick}
                key={index} className="toastBtn" 
                style={{
                    color: color,
                    borderColor: borderColor,
                    border: border,
                    backgroundColor: backgroundColor,
                    fontWeight:fontWeight,
                    marginBottom:marginBottom,
                    marginTop:marginTop,
                    fontSize:fontSize
                }}
                >{value}</button>
            </div>
        )
    }
}

export default ToasterButton;