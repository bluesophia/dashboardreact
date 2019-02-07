import React, { Component } from 'react';

class ImgCircleStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            width: props.width
        }
    }
    render(){
        return(
            <div>
                <img src={this.props.src} alt="user" style={{borderRadius: "100%", width: this.props.width}} />
            </div>
        )
    }
}
export default ImgCircleStatus;