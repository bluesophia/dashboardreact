import React, { Component } from 'react';
import './ToasterButton.css'

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
        
        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom, marginTop, fontSize, onClick } = this.props;

        return(
            <div className="toast-btn-container">
                <button 
                key={index} className="toastBtn" 
                onClick={onClick}
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