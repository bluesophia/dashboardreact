import React, { Component } from 'react';
import CardWidgetTodolist from '../../../Components/CardWidgetTodolist/CardWidgetTodolist'
import { RectangleButton } from '../../../Components/Common/Button/ButtonExports'
import './WidgetTodoList.css'
import '../../../Assets/Styles/theme.css'

class WidgetTodoList extends Component {
    render(){
        const todoList = [
            {
                id: 0,
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                imgUrl2: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                imgUrl3: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                imgUrl4: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                backgroundColor: "#E26B78",
                status: "today"
            },
            {
                id: 1,
                comment: 'Lorem Ipsum is simply dummy text of the printing',
                date: 'April 14, 2016',
                backgroundColor: "#fb9678",
                status: "1week"
            },
            {
                id: 2,
                comment: 'Give Purchase report to',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                imgUrl2: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                backgroundColor: "#03a9f3",
                status: "yesterday"
            },
            {
                id: 3,
                comment: 'Lorem Ipsum is simply dummy text of the printing',
                date: 'April 14, 2016',
                backgroundColor: "#fec107",
                status: "2weeks"
            },
            {
                id: 3,
                comment: 'Give Purchase report to',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                backgroundColor: "#03a9f3",
                status: "yesterday"
            },
        ]
        return(
            <div className="widgettodolist-row">
                <div className="widgettodolist-col-lg-6">
                    <div className="widgettodolist-card">
                        <div className="widgettodolist-card-body">
                            <h5 className="widgettodolist-card-title">TO DO LIST</h5>
                            <RectangleButton 
                                width="40px"
                                height="40px"
                                backgroundColor="#00c292"
                                color="white"
                                value="Add Task"
                                fontSize="12px"
                                borderRadius="2.25rem"
                                padding="5px 10px 5px 10px"
                            />
                        </div>
                        <div className="widgettodolist-widgets" id="comment">
                        {
                            todoList.map((item, index) => (
                            <CardWidgetTodolist 
                                key={index} 
                                comment={item.comment} 
                                date={item.date} 
                                imgUrl={item.imgUrl} 
                                imgUrl2={item.imgUrl2} 
                                imgUrl3={item.imgUrl3} 
                                imgUrl4={item.imgUrl4} 
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


export default WidgetTodoList;