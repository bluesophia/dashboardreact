import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CircleButton extends Component {
    
    static defaultProps = {
        width: '40px',
        height: '40px',
        backgroundColor: "#20c997",
        color: "white"
    }

    render(){

        const { width, height, backgroundColor, color, value} = this.props;
        
        return(
            <div>
                <button style={{
                    borderRadius: "100%", 
                    border: "none",
                    fontSize: "20px",
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color
                    }}>
                    <FontAwesomeIcon icon={this.props.icon}/>
                    <span>{value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;