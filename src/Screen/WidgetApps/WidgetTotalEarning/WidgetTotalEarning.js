import React, { Component } from 'react';
import CardWidgetTotalEarning from '../../../Components/CardWidgetTotalEarning/CardWidgetTotalEarning';
import CardTitlewithOptions from '../../../Components/CardTitlewithOptions/CardTitlewithOptions';
import './WidgetTotalEarning.css';
import '../../../Assets/Styles/theme.css';

class WidgetTotalEarning extends Component {
    render(){
        const browserList = [
            {
                id: 0,
                name: 'Andrew Simon',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg',
                earning: "$2300",
                backgroundColor: 'var(--blue)'
            },
            {
                id: 1,
                name: 'Daniel Kristeen',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
                earning: "$3300",
                backgroundColor: 'var(--teal)'
            },
            {
                id: 2,
                name: 'Dany John',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/3.jpg',
                earning: "$4300",
                backgroundColor: 'var(--primary)'
            },
            {
                id: 3,
                name: 'Chris gyle',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/4.jpg',
                earning: "$5300",
                backgroundColor: 'var(--yellow)'
            },
            {
                id: 4,
                name: 'Opera mini',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/5.jpg',
                earning: "$4567",
                backgroundColor: 'var(--red)'
            },
            {
                id: 5,
                name: 'Microsoft edge',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/6.jpg',
                earning: "$7889",
                backgroundColor: 'var(--cyan)'
            },
        ]

        const monthList = [
            {
                id:0,
                name: 'Today'
            },
            {
                id:1,
                name: 'Weekly'
            }
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widgettotalearning-card">
                        <div className="widgettotalearning-card-body">
                            <h5 className="widgettotalearning-card-title">Total Earning</h5>
                            <CardTitlewithOptions 
                                titleName="$586"
                                fontSize="30px"
                                fontWeight="300"
                                optionList={monthList}
                            />
                        </div>
                        <div className="widgettotalearning-options">

                        </div>
                        <div className="widgettotalearning-list" id="comment">
                        {
                            browserList.map((item, index) => (
                            <CardWidgetTotalEarning
                                key={index} 
                                name={item.name} 
                                imgUrl={item.imgUrl} 
                                earning={item.earning}
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


export default WidgetTotalEarning;