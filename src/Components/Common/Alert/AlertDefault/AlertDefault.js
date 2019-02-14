import React, { Component } from 'react';
import './AlertDefault.css'

class AlertDefault extends Component {
    
    static defaultProps = {
        border: "1px solid #b8eee0",
        backgroundColor: "#ccf3e9",
        color: "#00654c",
        value: "This is an example top alert. You can edit what u wish.",
        fontWeight: "300",
        marginBottom: "10px"
    }

    render(){

        const { index, color, borderColor,border, backgroundColor, value, fontWeight, marginBottom, marginTop, fontSize } = this.props;
        
        return(
            <div className="recAlert" 
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
            {value}
            </div>
        )
    }
}

export default AlertDefault;