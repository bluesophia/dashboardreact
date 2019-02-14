import React, { Component } from 'react';
import './AlertIconWithContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class AlertIconWithContent extends Component {
    
    static defaultProps = {
        title: "Success",
        titleColor: "var(--teal)",
        icon: faCheckCircle,
        border: "1px solid #b8eee0",
        backgroundColor: "#ccf3e9",
        color: "#00654c",
        value: "This is an example top alert. You can edit what u wish. Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
        fontWeight: "300",
        marginBottom: "10px"
    }

    render(){

        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom, marginTop, fontSize, title, titleColor, icon, onClick } = this.props;
        
        return(
            <div className="iconwithcontent" 
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
            <button className="iconwithcontent-close" onClick={onClick}>
            <span>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    style={{fontSize: "14px"}}
                />
            </span>
            </button>
            <h1 className="iconwithcontent-h1" style={{color:titleColor}}>
                <FontAwesomeIcon 
                        icon={icon} 
                        style={{
                            fontSize: "24px",
                            display:"inline-block", 
                            marginRight: "10px"
                        }}
                />
                {title}
            </h1>
            {value}
            </div>
        )
    }
}

export default AlertIconWithContent;