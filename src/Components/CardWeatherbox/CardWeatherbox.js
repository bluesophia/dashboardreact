import React, { Component } from 'react';
import './CardWeatherbox.css';
import '../Assets/Styles/theme.css';
import { WiDayCloudyHigh } from 'weather-icons-react';

class CardWeatherBox extends Component {
    render(){
        return(
            <div className="WeatherWrapper">
                <div className="col-md-12">
                    <div className="Weathercard">
                        <div className="Weather-card-body">
                            <div className="WeatherRow">
                                <div className="col-6">
                                    <div className="leftText">
                                        <h3>&nbsp;</h3>
                                        <div>73<sup>°F</sup></div>
                                        <p>AHMEDABAD, INDIA</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="rightText">
                                        <h1><WiDayCloudyHigh /></h1>
                                        <b>SUNNEY DAY</b>
                                        <p>April 14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default CardWeatherBox;