import React, { Component } from 'react';
import './Infobox.css';
import '../../../Assets/Styles/theme.css';
import CardInfobox from '../../../Components/CardInfobox/CardInfobox'

class Infobox extends Component {
    render () {
        const infoList = [
            {
                id: 0,
                title: 'MYNEW CLIENTS',
                icon: 'screen-desktop',
                counter: '23',
                percent: '85',
                counterColor:'counter-primary',
                className: 'progress-bar-primary',
                ariaValuenow: '25',
            },
            {
                id: 1,
                title: 'NEW PROJECTS',
                icon: 'note',
                counter: '169',
                percent: '85',
                counterColor:'counter-cyan',
                className: 'progress-bar-cyan',
                ariaValuenow: '25',
            },
            {
                id: 2,
                title: 'NEW INVOICES',
                icon: 'doc',
                counter: '157',
                percent: '85',
                counterColor:'counter-purple',
                className: 'progress-bar-purple',
                ariaValuenow: '25',
            },
            {
                id: 3,
                title: 'ALL PROJECTS',
                icon: 'bag',
                counter: '431',
                percent: '85',
                counterColor:'counter-green',
                className: 'progress-bar-green',
                ariaValuenow: '25',
            },
        ]
        return(
        <div className="wrapper">
            <div className="card-group">
            {   
                infoList.map((item, index) => (
                    <CardInfobox 
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    counter={item.counter}
                    percent={item.percent}
                    counterColor={item.counterColor}
                    className={item.className}    
                    ariaValuenow={item.areaValuenow}
                    />
                ))
            }    
            </div>  
        </div>  
        )
    }
};

export default Infobox;