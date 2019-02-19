import React, { Component } from 'react'
import './CardWidgetProfileDetailBottom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip'
import '../../Assets/Styles/theme.css'

class CardWidgetProfileDetailBottom extends Component {
    constructor(props){
        super(props);
        this.setState={
            mouseOn: false
        }
        this.handleHover = this.handleHover.bind(this);
        this.handleHoverOff = this.handleHoverOff.bind(this);
    }

    // hover change color
    handleHover(){
        this.state={
            mouseOn: true
        }
    }
    handleHoverOff(){
        this.state={
            mouseOn: false
        }
    }

    render(){
        const icon = [
            {
                id: 0,
                icon: faGlobe
            },
            {
                id: 1,
                icon: faTwitter
            },
            {
                id: 2,
                icon: faFacebook
            },
            {
                id: 3,
                icon: faYoutube
            },
            {
                id: 4,
                icon: faLinkedin
            },
        ]
        
        return(
            <div className="widgetprofiledetailbottom-card-body-bottom">
                    <div className="widgetprofiledetailbottom-card-footer">
                        <div className="widgetprofiledetailbottom-card-footer-content">
                            <p>Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div>
                            <div className="widgetprofiledetailbottom-card-body-bottom-button">
                            {
                                icon.map((item, index) => (
                                    <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff}>
                                    <ReactTooltip id='widgetprofiledetailbottom-tootip-icon'>
                                        <p>website</p>
                                    </ReactTooltip>
                                        <FontAwesomeIcon 
                                            id='widgetprofiledetailbottom-tootip-icon'
                                            icon={item.icon} 
                                            style={{
                                                width: "20px", 
                                                height: "20px", 
                                                margin: "5px",
                                                color: this.setState.mouseOn ? "var(--primary)" : null
                                            }}
                                        />  
                                    </a>
                                ))
                            }    
                            </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        )
    }
}
const CircleButtonStyle = {
    fontSize: "13px"
}

export default CardWidgetProfileDetailBottom;