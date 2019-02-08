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
                <ul class="cardchat-list">
                    {/* chat Row */}
                    <li>
                        <div class="cardchat-img">
                        {
                                condition? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"50px"}/>
                        }
                        </div>
                        <div class="cardchat-content">
                            <h5>{name}</h5>
                            <div class="cardchat-content-box">{comment}</div>
                        </div>
                        <div class="cardchat-time">{time}</div>
                    </li>
                    {/* chat Row Odd */}
                    <li class="odd">
                        <div class="odd-cardchat-content">
                            <div class="odd-cardchat-content-box">{comment}</div>
                        </div>
                        <div class="odd-cardchat-time">{time}</div>
                    </li>
                </ul>
            </div>
        )
    }
};


                
export default CardChat;