import React, { Component } from 'react';

class CircleButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            backgroundColor: props.backgroundColor,
            color: props.color
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
                    <i className={this.props.icon}></i>
                    <span>{this.props.value}</span>
                </button>
            </div>
        )
    }
}
export default CircleButton;