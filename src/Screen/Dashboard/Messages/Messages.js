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
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                date: 'April 14, 2016',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                backgroundColor: "#03a9f3",
                status: "pending"
            },
            {
                id: 1,
                name: 'Michael Jorden',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                date: 'April 14, 2016',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                backgroundColor: "#20c997",
                status: "Approved"
            },
            {
                id: 2,
                name: 'Johnathan Doeting',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                date: 'April 14, 2016',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                backgroundColor: "#E26B78",
                status: "Rejected"
            },
            {
                id: 3,
                name: 'Genelia doe',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                date: 'April 14, 2016',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                backgroundColor: "#20c997",
                status: "Approved"
            },
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="cardRecentcomments-card">
                        <div className="cardRecentcomments-card-body">
                            <h5 className="cardRecentcomments-card-title">Recent Comments</h5>
                        </div>
                        <div className="comment-widgets" id="comment">
                        <Scrollbars autoHide>
                        {
                            commentList.map((item, index) => (
                            <CardMessages 
                                key={commentList.id} 
                                name={item.name} 
                                comment={item.comment} 
                                date={item.date} 
                                imgUrl={item.imgUrl} 
                                backgroundColor={item.backgroundColor}
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