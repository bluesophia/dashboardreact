import React, { Component } from 'react';
import './ImgColorCircleSimplelineIcon.css';
import SimpleLineIcon from 'react-simple-line-icons';

class ImgColorCircleSimplelineIcon extends Component {
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
            backgroundColor: props.backgroundColor,
            fontSize: props.fontSize
        }
    }
    render(){
        const { value, width, height, icon, backgroundColor, fontSize } = this.props;
        return(
            <div>
                <span className="user-color-img-round" style={{width: width, height: height, backgroundColor:backgroundColor }}><p>{value}</p>
                {
                    icon ? <SimpleLineIcon name={icon} style={{fontSize: fontSize}}/>: null
                }
                </span>
            </div>
        )
    }
}

export default ImgColorCircleSimplelineIcon;