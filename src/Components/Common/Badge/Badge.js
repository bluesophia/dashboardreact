import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: props.backgroundColor,
            value: props.value,
            color: props.color
        }
    }
    render(){
        return(
            <div>
                <span class="badge" 
                style={{
                    backgroundColor:this.state.backgroundColor, 
                    color:this.state.color,
                }}
                >
                {this.state.value}
                </span> 
            </div>
        )
    }
}

export default Badge;