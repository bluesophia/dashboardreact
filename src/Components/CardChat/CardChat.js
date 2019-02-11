import React, { Component } from 'react';
import './CardChat.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import ImgColorCircle from '../Common/ImgColorCircle/ImgColorCircle';

class CardChat extends Component {
    render(){

        const { name, comment, time, imgUrl, value } = this.props;
        const condition = this.props.imgUrl

        return(
            <div className="cardchat-row-card">
                <ul className="cardchat-list">
                    {/* chat Row */}
                    <li>
                        <div className="cardchat-img">
                        {
                                condition? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"50px"}/>
                        }
                        </div>
                        <div className="cardchat-content">
                            <h5>{name}</h5>
                            <div className="cardchat-content-box">{comment}</div>
                        </div>
                        <div className="cardchat-time">{time}</div>
                    </li>
                    {/* chat Row Odd */}
                    <li className="odd">
                        <div className="odd-cardchat-content">
                            <div className="odd-cardchat-content-box">{comment}</div>
                        </div>
                        <div className="odd-cardchat-time">{time}</div>
                    </li>
                </ul>
            </div>
        )
    }
};


                
export default CardChat;