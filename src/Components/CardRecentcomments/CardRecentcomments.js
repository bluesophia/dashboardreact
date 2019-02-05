import React, { Component } from 'react';
import './CardRecentcomments.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import Badge from '../Common/Badge/Badge'
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
                                <a href="#"><i className="ti-pencil-alt"></i></a>
                                <a href="#"><i className="ti-check"></i></a>
                                <a href="#"><i className="ti-heart"></i></a>    
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};

export default CardRecentcomments;