import React, { Component } from 'react';
import './CardChatDifferentOption.css';
import ImgCircle from '../Common/ImgCircle/ImgCircle';
import ImgColorCircle from '../Common/ImgColorCircle/ImgColorCircle';

class CardChatDifferentOption extends Component {
    render(){

        const { name, comment, time, imgUrl, value } = this.props;

        return(
            <div className="cardchatdifferentoption-row-card">
                <ul className="cardchatdifferentoption-list-ul">
                    {
                        name === "Steave Doe" ? 
                        <li className="cardchatdifferentoption-list-odd-li">
                            <div className="cardchatdifferentoption-list-odd-li-cardchat-content">
                                <h5>{name}</h5>
                                <div className="cardchatdifferentoption-list-odd-li-cardchat-content-box">{comment}</div>
                            </div>
                            <div className="cardchatdifferentoption-odd-img">
                                {
                                        imgUrl ? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"45px"} height={"45px"}/>
                                }
                            </div>
                            <div className="cardchatdifferentoption-list-odd-li-cardchat-time">{time}</div>
                        </li> 
                        :
                        <li>
                            <div className="cardchatdifferentoption-img">
                            {
                                    imgUrl ? <ImgCircle src={imgUrl} width={"45px"} /> : <ImgColorCircle value={value} width={"45px"} height={"45px"}/>
                            }
                            </div>
                            <div className="cardchatdifferentoption-content">
                                <h5>{name}</h5>
                                <div className="cardchatdifferentoption-content-box">{comment}</div>
                            </div>
                            <div className="cardchatdifferentoption-time">{time}</div>
                        </li>
                    }
                </ul>
            </div>
        )
    }
};


                
export default CardChatDifferentOption;