import React, { Component } from 'react';
import './ImgColorCircleStatus.css'

class ImgColorCircleStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            status: props.stauts,
            backgroundColor: props.backgroundColor,
            circleName: props.circleName,
            width: props.width,
            height: props.height
        }
    }
    render(){
        const { backgroundColor, circleName, width, height } = this.props;
        return(
            <div>
                <span className="imgcolorcircle-user-img-round" style={{backgroundColor: backgroundColor, width:width, height:height }}><p>{circleName}</p></span>
            </div>
        )
    }
}
export default ImgColorCircleStatus;