import React, { Component } from 'react';
import './CardMessages.css';
import ImgCircleStatus from '../Common/ImgCircleStatus/ImgCircleStatus';

class CardMessages extends Component {
    render(){

        const { name, comment, time, imgUrl, status, circleName, backgroundColor } = this.props;

        return(
            <div className="message-row-card">
            <a href="#" className="message-row-a">
            <div className="message-row">
                <div className="message-row-image">
                    <span> 
                        <ImgCircleStatus 
                        src={imgUrl} 
                        status={status}
                        circleName={circleName}
                        backgroundColor={backgroundColor}
                        marginBottom="0"
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