import React, { Component } from 'react';
import './AlertImgDissmissal.css'
import ImgCircle from '../../ImgCircle/ImgCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class AlertImgDissmissal extends Component {
    
    static defaultProps = {
        src: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
        border: "1px solid #b8eee0",
        backgroundColor: "#ccf3e9",
        color: "#00654c",
        value: "This is an example top alert. You can edit what u wish.",
        fontWeight: "300",
        marginBottom: "10px"
    }

    render(){

        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom, marginTop, fontSize, src, onClick } = this.props;
        
        return(
            <div className="rec-img-dissmissal" 
            key={index}
            style={{
                color: color,
                borderColor: borderColor,
                border: border,
                backgroundColor: backgroundColor,
                fontWeight:fontWeight,
                marginBottom:marginBottom,
                marginTop:marginTop,
                fontSize:fontSize
            }}
            >
            <img src={src} 
                 style={{
                     width:"30px", 
                     borderRadius:'100%',
                     marginBottom: '-7px',
                     marginRight: '5px'
                }}/>
            {value}
            <button className="rec-img-dissmissal-close" onClick={onClick}>
            <span>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    style={{fontSize: "14px"}}
                />
            </span>
            </button>
            </div>
        )
    }
}

export default AlertImgDissmissal;