import React, { Component } from 'react';
import CardWidgetFeeds from '../../../Components/CardWidgetFeeds/CardWidgetFeeds'
import './WidgetFeeds.css';
import '../../../Assets/Styles/theme.css';

class WidgetFeeds extends Component {
    render(){
        const browserList = [
            {
                id: 0,
                feeds: 'You have 4 pending tasks.',
                icon: 'bell',
                time: 'Just now',
                percent: "23%",
                backgroundColor: 'var(--blue)'
            },
            {
                id: 1,
                feeds: 'Server #1 overloaded.',
                icon: 'layers',
                time: '2 Hours ago',
                percent: "23%",
                backgroundColor: 'var(--teal)'
            },
            {
                id: 2,
                feeds: 'New order received.',
                icon: 'basket',
                time: '30 May',
                percent: "23%",
                backgroundColor: 'var(--yellow)'
            },
            {
                id: 3,
                feeds: 'New Version just arrived.',
                icon: 'user',
                time: '27 May',
                percent: "23%",
                backgroundColor: 'var(--red)'
            },
            {
                id: 4,
                feeds: 'You have 4 pending tasks.',
                icon: 'bell',
                time: 'Just now',
                percent: "23%",
                backgroundColor: 'var(--black)'
            },
            {
                id: 5,
                feeds: 'You have 4 pending tasks.',
                icon: 'bell',
                time: 'Just now',
                percent: "23%",
                backgroundColor: 'var(--blue)'
            },
            {
                id: 6,
                feeds: 'New user registered.',
                icon: 'user',
                time: '30 May',
                percent: "23%",
                backgroundColor: 'var(--red)'
            }
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widgetfeeds-card">
                        <div className="widgetfeeds-card-body">
                            <h5 className="widgetfeeds-card-title">Feeds</h5>
                        </div>
                        <div className="widgetfeeds-list" id="comment">
                        {
                            browserList.map((item, index) => (
                            <CardWidgetFeeds
                                key={index} 
                                feeds={item.feeds} 
                                icon={item.icon}
                                imgUrl={item.imgUrl} 
                                time={item.time}
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


export default WidgetFeeds;