import React, { Component } from 'react';
import './CardWidgetRecentcomments.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Badge from '../Common/Badge/Badge'
import SimpleLineIcon from 'react-simple-line-icons';

class CardWidgetRecentcomments extends Component {
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

        const { name, comment, date, imgUrl, backgroundColor, status } = this.props;

        return(
            <div className="widgetrecentcomment-row" onMouseEnter={this.visibleIcon} onMouseLeave={this.hideIcon}>
                <div className="widgetrecentcomment-row-image">
                    <span className="widgetrecentcomment-round"> 
                        <ImgCircle src={imgUrl} width={"50px"}/>
                    </span>
                </div>
                <div className="widgetrecentcomment-text">
                    <h5>{name}</h5>
                    <div className="widgetrecentcomment-footer">
                        <span className="widgetrecentcomment-footer-date">{date}</span>
                        <Badge backgroundColor={backgroundColor} value={status} color={"#fff"}/>
                    </div>
                    <span className="widgetrecentcomment-action-icons" style={{visibility: this.state.visible ? 'visible' : 'hidden' }}>
                        <a href="#" className="widgetrecentcomment-icon-hover-color">
                            <SimpleLineIcon name="pencil" style={SimpleLineIconStylePencil}/>
                        </a>
                        <a href="#" className="widgetrecentcomment-icon-hover-color">
                            <SimpleLineIcon name="check" style={SimpleLineIconStyleCheck}/>
                        </a>
                        <a href="#">
                            <SimpleLineIcon name="heart" style={SimpleLineIconStyleHeart} />
                        </a>    
                    </span>
                    <p>{comment}</p>
                </div>
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

export default CardWidgetRecentcomments;