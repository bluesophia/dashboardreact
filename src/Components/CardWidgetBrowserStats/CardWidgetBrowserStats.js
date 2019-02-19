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
            <div className="widgetrecentcomment-row" onMouseEnter={this.visibleIcon} onMouseLeave={this.hideIcon}>
                <img src={imgUrl} />
                <h5>{name}</h5>
                <Badge backgroundColor={backgroundColor} value={percent} color={"#fff"} borderRadius={"5px"}/>
            </div>
        )
    }
};
// SimpleLineIconStyle
const SimpleLineIconStylePencil = {
    fontSize: '10px',
    color: 'var(--gray)'
}
const SimpleLineIconStyleCheck = {
    fontSize: '10px',
    color: 'var(--teal)'
}
const SimpleLineIconStyleHeart = {
    fontSize: '10px',
    color: 'var(--red)'
}

export default CardWidgetBrowserStats;