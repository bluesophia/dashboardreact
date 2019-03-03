import React, { Component } from 'react';
import './ImgColorCircle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ImgColorCircle extends Component {
        static defaultProps = {
            value: '',
            width: '50px',
            height: '50px',
            backgroundColor: 'var(--green)'
        }
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            width: props.width,
            height: props.height,
            icon: props.icon,
            backgroundColor: props.backgroundColor
        }
    }
    render(){
        const { value, width, height, icon, backgroundColor } = this.props;
        return(
            <div>
                <span className="user-color-img-round" style={{width: width, height: height, backgroundColor:backgroundColor }}><p>{value}</p>
                {
                    icon ? <FontAwesomeIcon icon={icon} style={FontAwesomeIconStyle}/> : null
                }
                </span>
            </div>
        )
    }
}

const FontAwesomeIconStyle = {
    
    fontSize: "20px"
}
export default ImgColorCircle;