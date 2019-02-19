import React, { Component } from 'react';
import CardRecentChat from '../../../Components/CardRecentChat/CardRecentChat'
import './WidgetRecentChat.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { CircleButton } from '../../../Components/Common/Button/ButtonExports'


class WidgetRecentChat extends Component {
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
                comment: "It’s Great opportunity to work.",
                time: '10:58 am',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg'
            },
            {
                id: 3,
                name: "reply",
                comment: "Whats budget of the new project.",
                time: '10:58 am',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg'
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
            <div className="widgetchat-row">
                <div className="widgetchat-col-lg-6">
                    <div className="widgetchat-card">
                        <div className="widgetchat-card-body">
                            <h5 className="widgetchat-card-title">Recent Chats</h5>
                        </div>
                        <div className="widgetchat-comment-widgets" id="comment">
                        {
                            commentList.map((item, index) => (
                            <CardRecentChat
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
                        </div>
                        <div className="widgetchat-card-body-typemessage">
                            <div className="widgetchat-row">
                                <div>
                                    <textarea placeholder="Type your message here" className="widgetchat-form-control"></textarea>
                                </div>
                                <div className="widgetchat-text-right">
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


export default WidgetRecentChat;