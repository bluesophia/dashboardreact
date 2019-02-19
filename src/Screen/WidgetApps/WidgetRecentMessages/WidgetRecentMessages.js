import React, { Component } from 'react';
import CardMessages from '../../../Components/CardMessages/CardMessages'
import './WidgetRecentMessages.css'
import '../../../Assets/Styles/theme.css'
import { Scrollbars } from 'react-custom-scrollbars';

class WidgetRecentMessages extends Component {
    render(){
        const commentList = [
            {
                id: 0,
                name: 'Pavan kumar',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                time: '9:30 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                status: 'online'
            },
            {
                id: 1,
                name: 'Sonu Nigam',
                comment: "I've sung a song! See you at",
                time: '9:10 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                status: 'busy'
            },
            {
                id: 2,
                name: 'Arijit Sinh',
                circleName: 'A',
                comment: 'Simply dummy text of the printing and typesetting industry.',
                time: '9:08 AM',
                status: 'away',
                backgroundColor: 'var(--cyan)'
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
                name: 'Pavan kumar',
                comment: 'Welcome to the Elite Admin',
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
            },
            {
                id: 6,
                name: 'Arijit Sinh',
                comment: 'I am a singer!',
                time: '9:08 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                status: 'away'
            },
            {
                id: 7,
                name: 'Pavan kumar',
                comment: "Just see the my admin!",
                time: '9:02 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                status: 'away'
            }
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widget-messages-card">
                        <div className="widget-messages-card-body">
                            <h5 className="widget-messages-card-title">Recent Messages</h5>
                        </div>
                        <div className="widget-comment-widgets" id="comment">
                        {
                            commentList.map((item, index) => (
                            <CardMessages 
                                key={index} 
                                name={item.name} 
                                circleName={item.circleName}
                                comment={item.comment} 
                                time={item.time} 
                                imgUrl={item.imgUrl}
                                status={item.status}
                                backgroundColor={item.backgroundColor}
                            />
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}


export default WidgetRecentMessages;