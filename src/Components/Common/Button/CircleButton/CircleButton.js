import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CircleButton extends Component {
    
    static defaultProps = {
        width: '40px',
        height: '40px',
        border: "none",
        backgroundColor: "#20c997",
        fontSize:"20px",
        color: "white",
        borderRadius: "100%"
    }

    render(){

        const { index, width, height,border, borderRadius, fontSize, backgroundColor, color, value, icon, padding, marginBottom} = this.props;
        
        return(
            <div>
                <button key={index} style={{
                    borderRadius: borderRadius, 
                    border: border,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color,
                    padding: padding,
                    marginBottom:marginBottom
                    }}
                    type='submit'
                    >
                    <FontAwesomeIcon icon={icon}/>
                    <span>{value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;