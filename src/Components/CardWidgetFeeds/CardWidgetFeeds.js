import React, { Component } from 'react';
import './CardWidgetFeeds.css';
import ImgColorCircleSimplelineIcon from '../Common/ImgColorCircleSimplelineIcon/ImgColorCircleSimplelineIcon'

class CardWidgetFeeds extends Component {
    state={
        visible: false
    }
    constructor(props){
        super(props);
        this.visibleIcon = this.visibleIcon.bind(this);
        this.hideIcon = this.hideIcon.bind(this);
    }
    visibleIcon () {
        this.setState({
            visible: true   
        })
    }
    hideIcon () {
        this.setState({
            visible: false   
        })
    }
    render(){

        const { feeds, icon, time, backgroundColor } = this.props;

        return(
            <div className="cardwidgetfeeds-row" onMouseEnter={this.visibleIcon} onMouseLeave={this.hideIcon}>
                <ImgColorCircleSimplelineIcon 
                    icon={icon} 
                    width="40px" 
                    height="40px" 
                    fontSize="15px" 
                    backgroundColor={backgroundColor}
                />
                <div><p className="cardwidgetfeeds-feeds">{feeds}</p></div>
                <span className="cardwidgetfeeds-span">{time}</span>
            </div>
        )
    }
};

export default CardWidgetFeeds;