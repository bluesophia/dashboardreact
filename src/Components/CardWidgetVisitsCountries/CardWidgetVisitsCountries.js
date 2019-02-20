import React, { Component } from 'react';
import './CardWidgetVisitsCountries.css';
import '../../Assets/Styles/theme.css';

class CardWidgetVisitsCountries extends Component {
    render () {

        const { visitors, title, counter, counterColor, className, ariaValuenow } = this.props;

        return(
            <div className="widgetvisitscard-card">
                <div className="widgetvisitscard-card-body">
                    <div className="widgetvisitscard-row">
                        <div className="col-md-12">
                            <div className="widgetvisitscard-contentBox">
                                <h3>{visitors}</h3>
                                <small>{title}</small>
                                <div className={counterColor}>{counter}</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="widgetvisitscard-progress">
                                <div 
                                className={className} 
                                role="progressbar" 
                                style={{ width:ariaValuenow + "%" }}
                                aria-valuemin="0" 
                                aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

// SimpleLineIconStyle
const SimpleLineIconStyle = {
    fontSize: '24px'
}

export default CardWidgetVisitsCountries;