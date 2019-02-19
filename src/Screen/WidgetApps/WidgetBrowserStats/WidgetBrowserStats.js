import React, { Component } from 'react';
import CardWidgetBrowserStats from '../../../Components/CardWidgetBrowserStats/CardWidgetBrowserStats'
import './WidgetBrowserStats.css';
import '../../../Assets/Styles/theme.css';

class WidgetBrowserStats extends Component {
    render(){
        const browserList = [
            {
                id: 0,
                name: 'Google Chrome',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/chrome-logo.png',
                percent: "23%",
                backgroundColor: 'var(--blue)'
            },
            {
                id: 1,
                name: 'Mozila Firefox',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/firefox-logo.png',
                percent: "15%",
                backgroundColor: 'var(--teal)'
            },
            {
                id: 2,
                name: 'Apple Safari',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/safari-logo.png',
                percent: "07%",
                backgroundColor: 'var(--primary)'
            },
            {
                id: 3,
                name: 'Internet Explorer',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/internet-logo.png',
                percent: "09%",
                backgroundColor: 'var(--yellow)'
            },
            {
                id: 4,
                name: 'Opera mini',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/opera-logo.png',
                percent: "23%",
                backgroundColor: 'var(--red)'
            },
            {
                id: 5,
                name: 'Microsoft edge',
                imgUrl: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/browser/internet-logo.png',
                percent: "09%",
                backgroundColor: 'var(--cyan)'
            },
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widgetbrowserstats-card">
                        <div className="widgetbrowserstats-card-body">
                            <h5 className="widgetbrowserstats-card-title">Browser Stats</h5>
                        </div>
                        <div className="widgetbrowserstats-widgets" id="comment">
                        {
                            browserList.map((item, index) => (
                            <CardWidgetBrowserStats 
                                key={index} 
                                name={item.name} 
                                imgUrl={item.imgUrl} 
                                percent={item.percent}
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


export default WidgetBrowserStats;