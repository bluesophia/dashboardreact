import React, { Component } from 'react';
import CardChat from '../../../Components/CardChat/CardChat'
import './Chat.css'
import { Scrollbars } from 'react-custom-scrollbars';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { CircleButton } from '../../../Components/Common/Button/ButtonExports'


class Chat extends Component {
    render(){
        const commentList = [
            {
                id: 0,
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                time: '9:30 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                status: 'online'
            },
            {
                id: 1,
                name: 'Bianca Doe',
                comment: "It’s Great opportunity to work.",
                time: '9:10 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                status: 'busy'
            },
            {
                id: 2,
                name: 'Arijit Sinh',
                value: 'A',
                comment: 'Simply dummy text of the printing and typesetting industry.',
                time: '9:08 AM',
                status: 'away'
            },
            {
                id: 3,
                name: 'Pavan kumar',
                comment: 'Just see the my admin!',
                time: '9:02 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                status: 'away'
            },
            {
                id: 4,
                name: 'Angelina Rhodes',
                comment: 'Well we have good budget for the project',
                time: '9:30 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                status: 'online'
            },
            {
                id: 5,
                name: 'Sonu Nigam',
                comment: "I've sung a song! See you at",
                time: '9:10 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                status: 'busy'
            }
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="chat-card">
                        <div className="chat-card-body">
                            <h5 className="chat-card-title">CHAT</h5>
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


export default Chat;