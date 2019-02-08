import React, { Component } from 'react';
import './ImgColorCircle.css'

class ImgColorCircle extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            width: props.width
        }
    }
    render(){
        return(
            <div>
                <span className="user-color-img-round" style={{width: this.props.with}}><p>{this.props.value}</p></span>
            </div>
        )
    }
}
export default ImgColorCircle;