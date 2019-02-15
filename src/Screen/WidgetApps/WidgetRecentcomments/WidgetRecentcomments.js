import React, { Component } from 'react';
import CardWidgetRecentcomments from '../../../Components/CardWidgetRecentcomments/CardWidgetRecentcomments'
import './WidgetRecentcomments.css';
import '../../../Assets/Styles/theme.css';

class WidgetRecentcomments extends Component {
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
                    <div className="widgetrecentcomments-card">
                        <div className="widgetrecentcomments-card-body">
                            <h5 className="widgetrecentcomments-card-title">Recent Comments</h5>
                        </div>
                        <div className="widgetrecentcomments-widgets" id="comment">
                        {
                            commentList.map((item, index) => (
                            <CardWidgetRecentcomments 
                                key={index} 
                                name={item.name} 
                                comment={item.comment} 
                                date={item.date} 
                                imgUrl={item.imgUrl} 
                                backgroundColor={item.backgroundColor}
                                status={item.status}
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


export default WidgetRecentcomments;