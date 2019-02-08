import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CircleButton extends Component {
    
    static defaultProps = {
        width: '40px',
        height: '40px',
        border: "none",
        backgroundColor: "#20c997",
        fontSize:"20px",
        color: "white"
    }

    render(){

        const { width, height,border, fontSize, backgroundColor, color, value, icon} = this.props;
        
        return(
            <div>
                <button style={{
                    borderRadius: "100%", 
                    border: border,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color
                    }}>
                    <FontAwesomeIcon icon={icon}/>
                    <span>{value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;