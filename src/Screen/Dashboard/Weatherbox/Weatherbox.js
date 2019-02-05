import React, { Component } from 'react';
import './Weatherbox.css';
import '../../../Assets/Styles/theme.css'
import CardWeatherbox from '../../../Components/CardWeatherbox/CardWeatherbox'


class WeatherBox extends Component {
    render(){
        this.state = {
            wiIcon: 'day-cloudy-high',
            weather: 'SUNNY DAY',
            degree: '73',
            country: 'AHMEDABAD, INDIA',
            date: 'April 14'
        }
        return(
            <div className="WeatherWrapper">
                <CardWeatherbox 
                    wiIcon={this.state.wiIcon}
                    weather={this.state.weather}
                    degree={this.state.degree}
                    country={this.state.country}
                    date={this.state.date}
                />
            </div>  
        )
    }
}

export default WeatherBox;