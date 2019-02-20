import React, { Component } from 'react';
import './CardWidgetTotalEarning.css';
import Badge from '../Common/Badge/Badge'
import ImgCircle from '../Common/ImgCircle/ImgCircle';

class CardWidgetTotalEarning extends Component {
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

        const { name, imgUrl, backgroundColor, earning } = this.props;

        return(
            <div className="cardwidgettotalearning-row" onMouseEnter={this.visibleIcon} onMouseLeave={this.hideIcon}>
                <ImgCircle src={imgUrl} width="50px"/>
                <h5>{name}</h5>
                <Badge backgroundColor={backgroundColor} value={earning} color={"#fff"} borderRadius={"5px"}/>
            </div>
        )
    }
};
export default CardWidgetTotalEarning;