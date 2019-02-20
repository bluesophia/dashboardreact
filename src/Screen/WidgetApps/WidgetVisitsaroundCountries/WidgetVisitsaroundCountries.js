import React, { Component } from 'react';
import CardWidgetVisitsCountries from '../../../Components/CardWidgetVisitsCountries/CardWidgetVisitsCountries'
import './WidgetVisitsaroundCountries.css';
import '../../../Assets/Styles/theme.css';

class WidgetVisitsaroundCountries extends Component {
    render(){
        const infoList = [
            {
                id: 0,
                title: 'From India',
                visitors: '6350',
                counter: '48%',
                className: 'widget-progress-bar-green',
                ariaValuenow: '50',
            },
            {
                id: 1,
                title: 'From UAE',
                visitors: '3250',
                counter: '98%',
                className: 'widget-progress-bar-blue',
                ariaValuenow: '50',
            },
            {
                id: 2,
                title: 'From Australia',
                visitors: '1250',
                counter: '75%',
                className: 'widget-progress-bar-black',
                ariaValuenow: '50',
            },
            {
                id: 3,
                title: 'From USA',
                visitors: '1350',
                counter: '48%',
                className: 'widget-progress-bar-yellow',
                ariaValuenow: '50',
            },
        ]
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="widgetvisits-card">
                        <div className="widgetvisits-card-body">
                            <h5 className="widgetvisits-card-title">Visits around the countries</h5>
                            <div className="widgetvisits-card-group">
                                {   
                                    infoList.map((item, index) => (
                                        <CardWidgetVisitsCountries 
                                        key={index}
                                        title={item.title}
                                        counter={item.counter}
                                        className={item.className}    
                                        ariaValuenow={item.ariaValuenow}
                                        visitors={item.visitors}
                                        />
                                    ))
                                }    
                            </div>  
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default WidgetVisitsaroundCountries;