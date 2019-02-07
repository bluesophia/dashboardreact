import React, { Component } from 'react';
import './CardMessages.css';
import ImgCircleStatus from '../Common/ImgCircleStatus/ImgCircleStatus';

class CardMessages extends Component {
    render(){

        const { name, comment, time, imgUrl, status } = this.props;

        return(
            <div className="message-row-card">
            <a href="#" className="message-row-a">
            <div className="message-row">
                <div className="message-row-image">
                    <span className="round"> 
                        <ImgCircleStatus 
                        src={imgUrl} 
                        width={"50px"}
                        status={status}
                        />
                    </span>
                </div>
                <div className="message-text">
                    <h5>{name}</h5>
                    <span className="message-span">{comment}</span>
                    <div className="message-footer">
                        <span className="message-footer-date">{time}</span>
                    </div>
                </div>
            </div>
            </a>
            </div>
        )
    }
};
export default CardMessages;