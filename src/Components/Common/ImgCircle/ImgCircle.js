import React, { Component } from 'react';

class ImgCircle extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            width: props.width
        }
    }
    render(){
        const { src, width } = this.props;
        return(
            <div>
                <img src={src} alt="user" style={{borderRadius: "100%", width:width}} />
            </div>
        )
    }
}
export default ImgCircle;