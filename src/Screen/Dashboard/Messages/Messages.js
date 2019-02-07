import React, { Component } from 'react';
import CardMessages from '../../../Components/CardMessages/CardMessages'
import './Messages.css'
import '../../../Assets/Styles/theme.css'
import { Scrollbars } from 'react-custom-scrollbars';

class Messages extends Component {
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
                name: 'Arifit Sinh',
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
                name: 'Pavan kumar',
                comment: 'Welcome to the Elite Admin',
                time: '9:30 AM',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                status: 'online'
            },
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="messages-card">
                        <div className="messages-card-body">
                            <h5 className="messages-card-title">YOU HAVE 5 NEW MESSAGES</h5>
                        </div>
                        <div className="comment-widgets" id="comment">
                        <Scrollbars autoHide>
                        {
                            commentList.map((item, index) => (
                            <CardMessages 
                                key={commentList.id} 
                                name={item.name} 
                                comment={item.comment} 
                                time={item.time} 
                                imgUrl={item.imgUrl}
                                status={item.status}
                            />
                            ))
                        }
                        </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}


export default Messages;