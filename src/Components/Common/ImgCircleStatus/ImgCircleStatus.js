import React, { Component } from 'react';
import ImgColorCircleStatus from '../ImgColorCircleStatus/ImgColorCircleStatus'
import './ImgCircleStatus.css'

class ImgCircleStatus extends Component {
    static defaultProps = {
        width: "45px",
        height: "45px"
    }
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            status: props.stauts,
            backgroundColor: props.backgroundColor
        }
    }
    render(){
        const { src, status, circleName, backgroundColor, width, height } = this.props;
        return(
            <div>
                <div className="user-img">
                {
                    src ? <img src={src} alt="user" style={{borderRadius: "100%", width: width, height:height , marginBottom: "10px"}} /> : <ImgColorCircleStatus circleName={circleName} backgroundColor={backgroundColor} width={"50px"} height={"50px"}/>
                }
                
                <span id="stauscircle" className={status}></span>
                </div>
            </div>
        )
    }
}
export default ImgCircleStatus;