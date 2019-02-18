import React, { Component } from 'react';
import './CardChat.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import ImgColorCircle from '../Common/ImgColorCircle/ImgColorCircle';

class CardChat extends Component {
    render(){

        const { name, comment, time, imgUrl, value } = this.props;

        return(
            <div className="cardchat-row-card">
                <ul className="cardchat-list-ul">
                    {
                        name === "reply" ? 
                        <li className="cardchat-list-odd-li">
                            <div className="cardchat-list-odd-li-cardchat-content">
                                <div className="cardchat-list-odd-li-cardchat-content-box">{comment}</div>
                            </div>
                            <div className="cardchat-list-odd-li-cardchat-time">{time}</div>
                        </li> 
                        :
                        <li>
                            <div className="cardchat-img">
                            {
                                    imgUrl ? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"45px"} height={"45px"}/>
                            }
                            </div>
                            <div className="cardchat-content">
                                <h5>{name}</h5>
                                <div className="cardchat-content-box">{comment}</div>
                            </div>
                            <div className="cardchat-time">{time}</div>
                        </li>
                    }
                </ul>
            </div>
        )
    }
};


                
export default CardChat;