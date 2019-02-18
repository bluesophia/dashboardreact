import React, { Component } from 'react';
import CardChat from '../../../Components/CardChat/CardChat'
import './WidgetChat.css'
import { Scrollbars } from 'react-custom-scrollbars';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { CircleButton } from '../../../Components/Common/Button/ButtonExports'


class WidgetChat extends Component {
    render(){
        const commentList = [
            {
                id: 0,
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing & type setting industry.',
                time: '19:56 am',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg'
            },
            {
                id: 1,
                name: 'Bianca Doe',
                comment: "It’s Great opportunity to work.",
                time: '9:10 am',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg'
            },
            {
                id: 2,
                name: "reply",
                comment: "I would love to join the team.",
                time: '10:58 am'
            },
            {
                id: 3,
                name: "reply",
                comment: "Whats budget of the new project.",
                time: '10:59 am'
            },
            {
                id: 4,
                name: 'Angelina Rhodes',
                comment: 'Well we have good budget for the project',
                time: '11:00 am',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg'
            },
        ]

        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="chat-card">
                        <div className="chat-card-body">
                            <h5 className="chat-card-title">Recent Chats</h5>
                        </div>
                        <div className="chat-comment-widgets" id="comment">
                        <Scrollbars autoHide>
                        {
                            commentList.map((item, index) => (
                            <CardChat 
                                key={index} 
                                name={item.name} 
                                comment={item.comment} 
                                time={item.time} 
                                imgUrl={item.imgUrl}
                                status={item.status}
                                value={item.value}
                            />
                            ))
                        }
                        </Scrollbars>
                        </div>
                        <div className="chat-card-body-typemessage">
                            <div className="chat-row">
                                <div>
                                    <textarea placeholder="Type your message here" className="chat-form-control"></textarea>
                                </div>
                                <div className="chat-text-right">
                                    <CircleButton 
                                        backgroundColor={"#1eaaf0"}
                                        icon={faPaperPlane}
                                        width={"50px"}
                                        height={"50px"}
                                        color={"white"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}


export default WidgetChat;