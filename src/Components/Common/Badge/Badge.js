import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme_color: props.themme_color,
            value: props.value
        }
    }
    render(){
        return(
            <div>
                <span class="badge" style={{backgroundColor:this.props.themecolor}}>
                {this.state.value}
                </span> 
            </div>
        )
    }
}

export default Badge;