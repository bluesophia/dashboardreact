import React, { Component } from 'react';
import '../../../Assets/Styles/theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faSave, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

class ImgTimelneBadgeColor extends Component {
    static defaultProps = {
        icon: faBomb,
        width: "50px",
        height: "50px",
        backgroundColor: "var(--teal)"
    }
    constructor(props){
        super(props);
        this.state = {
            icon: faBomb,
            width: "50px",
            height: "50px",
            backgroundColor: "var(--teal)"
        }
    }
    render(){
        const { icon, width, height, backgroundColor } = this.props;
        return(
            <div className="timeline-badge" style={{
                backgroundColor: backgroundColor,
                width: width,
                height: height
            }}>
            <FontAwesomeIcon icon={icon} className="timeline-image-responsive" alt="user" 
            style={{
                fontSize: "20px",
                }} />
            </div>
        )
    }
}

export default ImgTimelneBadgeColor;