import React, { Component } from 'react';
import './CardWeatherbox.css';
import '../../Assets/Styles/theme.css';
import WeatherIcons from 'react-weathericons';
import '../../Assets/Styles/weather-icons.css';

class CardWeatherBox extends Component {
    render(){
        const { degree, country, wiIcon, weather, date } = this.props;
        return(
                <div className="col-md-12">
                    <div className="Weathercard">
                        <div className="Weather-card-body">
                            <div className="WeatherRow">
                                <div className="col-6">
                                    <div className="leftText">
                                        <h3>&nbsp;</h3>
                                        <div>{degree}<sup>°F</sup></div>
                                        <p>{country}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="rightText">
                                        <h1><WeatherIcons name={wiIcon} size="lg" style={WeatherIconsStyle} /></h1>
                                        <b>{weather}</b>
                                        <p>{date}</p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
        )
    }
}

const WeatherIconsStyle = {
    marginLeft: "10px"
}

export default CardWeatherBox;