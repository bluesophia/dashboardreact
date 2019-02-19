import React, { Component } from 'react';
import './CardRecentChat.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import ImgColorCircle from '../Common/ImgColorCircle/ImgColorCircle';

class CardRecentChat extends Component {
    render(){

        const { name, comment, time, imgUrl, value } = this.props;

        return(
            <div className="cardrecentchat-row-card">
                <ul className="cardrecentchat-list-ul">
                    {
                        name === "reply" ? 
                        <li className="cardrecentchat-list-odd-li">
                            <div className="cardrecentchat-list-odd-li-cardchat-content">
                                <div className="cardrecentchat-list-odd-li-cardchat-content-box">{comment}</div>
                            </div>
                            <div className="cardrecentchat-list-odd-li-cardchat-time">{time}</div>
                        </li> 
                        :
                        <li>
                            <div className="cardrecentchat-img">
                            {
                                    imgUrl ? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"45px"} height={"45px"}/>
                            }
                            </div>
                            <div className="cardrecentchat-content">
                                <h5>{name}</h5>
                                <div className="cardrecentchat-content-box">{comment}</div>
                            </div>
                            <div className="cardrecentchat-time">{time}</div>
                        </li>
                    }
                </ul>
            </div>
        )
    }
};


                
export default CardRecentChat;