import React, { Component } from 'react';
import '../../../Assets/Styles/theme.css'
import './ImgTimelineBadge.css'

class ImgTimelineBadge extends Component {
    static defaultProps = {
        src: "http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg",
        width: "50px",
        height: "50px",
        backgroundColor: "var(--teal)"
    }
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            width: props.width,
            height: props.height,
            margin: props.margin,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius
        }
    }
    render(){
        const { src, width, height, backgroundColor, margin } = this.props;
        return(
            <div className="timeline-badge" style={{
                backgroundColor: backgroundColor,
                width: width,
                height: height
            }}>
                <img src={src} alt="user" 
                style={{
                    width: width,
                    height: height,
                    margin: margin
                    }} />
            </div>
        )
    }
}
export default ImgTimelineBadge;