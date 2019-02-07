import React, { Component } from 'react';
import ImgColorCircleStatus from '../ImgColorCircleStatus/ImgColorCircleStatus'
import './ImgCircleStatus.css'

class ImgCircleStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: props.src,
            status: props.stauts
        }
    }
    render(){
        const condition = this.props.src;
        return(
            <div>
                <div className="user-img">
                {
                    condition ? <img src={this.props.src} alt="user" style={{borderRadius: "100%", width: "45px" , marginBottom: "10px"}} /> : <ImgColorCircleStatus />
                }
                
                <span id="stauscircle" className={this.props.status}></span>
                </div>
            </div>
        )
    }
}
export default ImgCircleStatus;