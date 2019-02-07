import React, { Component } from 'react';
import './ImgColorCircleStatus.css'

class ImgColorCircleStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            status: props.stauts
        }
    }
    render(){
        return(
            <div>
                <span className="user-img-round"><p>A</p></span>
            </div>
        )
    }
}
export default ImgColorCircleStatus;