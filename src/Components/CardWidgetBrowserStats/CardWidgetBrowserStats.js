import React, { Component } from 'react';
import './CardWidgetBrowserStats.css';
import Badge from '../Common/Badge/Badge'

class CardWidgetBrowserStats extends Component {
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

        const { name, imgUrl, backgroundColor, percent } = this.props;

        return(
            <div className="widgetbrowserstats-row" onMouseEnter={this.visibleIcon} onMouseLeave={this.hideIcon}>
                <img src={imgUrl} />
                <h5>{name}</h5>
                <Badge backgroundColor={backgroundColor} value={percent} color={"#fff"} borderRadius={"5px"}/>
            </div>
        )
    }
};

export default CardWidgetBrowserStats;