import React, { Component } from 'react';
import './CardRecentcomments.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Badge from '../Common/Badge/Badge'
import SimpleLineIcon from 'react-simple-line-icons';

class CardRecentcomments extends Component {
    render(){

        const { name, comment, date, imgUrl, backgroundColor, status } = this.props;

        return(
            <div className="comment-row">
                <div className="comment-row-image">
                    <span className="round"> 
                        <ImgCircle src={imgUrl} width={"50px"}/>
                    </span>
                </div>
                <div className="comment-text">
                    <h5>{name}</h5>
                    <p>{comment}</p>
                    <div className="comment-footer">
                        <span className="comment-footer-date">{date}</span>
                        <Badge backgroundColor={backgroundColor} value={status} color={"#fff"}/>
                        <span className="action-icons">
                                <a href="#" className="icon-hover-color"><SimpleLineIcon name="pencil" style={SimpleLineIconStyle}/></a>
                                <a href="#" className="icon-hover-color"><SimpleLineIcon name="check" style={SimpleLineIconStyle}/></a>
                                
                                <a href="#"><SimpleLineIcon name="heart" style={SimpleLineIconStyle} /></a>    
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};
// SimpleLineIconStyle
const SimpleLineIconStyle = {
    fontSize: '14px'
}
export default CardRecentcomments;