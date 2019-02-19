import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: props.backgroundColor,
            value: props.value,
            color: props.color,
            borderRadius: props.borderRadius
        }
        
    }
    static defaultProps = {
        backgroundColor: "#03a9f3",
        value: 'pending',
        color: "white"
    }

    render(){
        const { backgroundColor, value, color, borderRadius } = this.props;
        return(
            <div>
                <span className="badge" 
                style={{
                    backgroundColor:backgroundColor, 
                    color:color,
                    borderRadius
                }}
                >
                {value}
                </span> 
            </div>
        )
    }
}

export default Badge;