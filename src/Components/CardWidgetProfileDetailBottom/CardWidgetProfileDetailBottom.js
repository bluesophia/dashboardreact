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
        this.setstate({
            mouseOn: true
        })
    }
    handleHoverOff(){
        this.setstate({
            mouseOn: false
        })
    }

    render(){
        return(
            <div className="widgetprofiledetailbottom-card-body-bottom">
                    <div className="widgetprofiledetailbottom-card-footer">
                        <div className="widgetprofiledetailbottom-card-footer-content">
                            <p>Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                        <div>
                            <div className="widgetprofiledetailbottom-card-body-bottom-button">
                            <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} >
                                <FontAwesomeIcon 
                                    data-tip 
                                    data-for='widgetprofiledetailbottom-tootip-icon-globe'
                                    icon={faGlobe} 
                                    style={{
                                        width: "20px", 
                                        height: "20px", 
                                        margin: "5px",
                                        color: this.setState.mouseOn ? "var(--primary)" : null
                                    }}
                                />
                                <ReactTooltip id='widgetprofiledetailbottom-tootip-icon-globe'>
                                    <span>Website</span>
                                </ReactTooltip>  
                            </a>
                            <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} >
                                <FontAwesomeIcon 
                                    data-tip 
                                    data-for='widgetprofiledetailbottom-tootip-icon-twitter'
                                    icon={faTwitter} 
                                    style={{
                                        width: "20px", 
                                        height: "20px", 
                                        margin: "5px",
                                        color: this.setState.mouseOn ? "var(--primary)" : null
                                    }}
                                />
                                <ReactTooltip id='widgetprofiledetailbottom-tootip-icon-twitter'>
                                    <span>Twitter</span>
                                </ReactTooltip>  
                            </a>
                            <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} >
                                <FontAwesomeIcon 
                                    data-tip 
                                    data-for='widgetprofiledetailbottom-tootip-icon-facebook'
                                    icon={faFacebook} 
                                    style={{
                                        width: "20px", 
                                        height: "20px", 
                                        margin: "5px",
                                        color: this.setState.mouseOn ? "var(--primary)" : null
                                    }}
                                />
                                <ReactTooltip id='widgetprofiledetailbottom-tootip-icon-facebook'>
                                    <span>Facebook</span>
                                </ReactTooltip>  
                            </a>
                            <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} >
                                <FontAwesomeIcon 
                                    data-tip 
                                    data-for='widgetprofiledetailbottom-tootip-icon-youtube'
                                    icon={faYoutube} 
                                    style={{
                                        width: "20px", 
                                        height: "20px", 
                                        margin: "5px",
                                        color: this.setState.mouseOn ? "var(--primary)" : null
                                    }}
                                />
                                <ReactTooltip id='widgetprofiledetailbottom-tootip-icon-youtube'>
                                    <span>Youtube</span>
                                </ReactTooltip>  
                            </a>
                            <a href="#" onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} >
                                <FontAwesomeIcon 
                                    data-tip 
                                    data-for='widgetprofiledetailbottom-tootip-icon-linkedin'
                                    icon={faLinkedin} 
                                    style={{
                                        width: "20px", 
                                        height: "20px", 
                                        margin: "5px",
                                        color: this.setState.mouseOn ? "var(--primary)" : null
                                    }}
                                />
                                <ReactTooltip id='widgetprofiledetailbottom-tootip-icon-linkedin'>
                                    <span>Linkedin</span>
                                </ReactTooltip>  
                            </a>
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