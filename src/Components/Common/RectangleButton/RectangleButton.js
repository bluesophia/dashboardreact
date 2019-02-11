import React, { Component } from 'react';
import './RectangleButton.css'

class RectangleButton extends Component {
    
    static defaultProps = {
        border: "1px solid transparent",
        backgroundColor: "rgb(0, 194, 146)",
        borderColor: "#00c292",
        color: "white",
        value: "Design Weblayout",
        fontWeight: "500",
        marginBottom: "20px"
    }

    render(){

        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom } = this.props;
        
        return(
            <div>
                <a key={index} className="recBtn" 
                style={{
                    color: color,
                    borderColor: borderColor,
                    border: border,
                    backgroundColor: backgroundColor,
                    fontWeight:fontWeight,
                    marginBottom:marginBottom
                }}>
                    <span>{value}</span>
                </a>
            </div>
        )
    }
}

export default RectangleButton;