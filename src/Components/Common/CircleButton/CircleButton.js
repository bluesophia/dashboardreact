import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CircleButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            color: props.color,
            icon: props.icon,
            fontSize:props.fontSize
        }
    }
    static defaultprops = {
            width: '40px',
            height: '40px',
            badkgroundColor: "#00c292",
            color: "white",
            value: "+"
    }
    render(){
        return(
            <div>
                <button style={{
                    borderRadius: "100%", 
                    border: "none",
                    fontSize: "20px",
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color
                    }}>
                    <FontAwesomeIcon icon={this.props.icon}/>
                    <span>{this.props.value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;