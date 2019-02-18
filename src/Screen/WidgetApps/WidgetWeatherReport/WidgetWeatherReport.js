import React, { Component } from 'react';
import './WidgetWeatherReport.css'
import CardTitlewithOptions from '../../../Components/CardTitlewithOptions/CardTitlewithOptions';
import CardWidgetWeatherTable from '../../../Components/CardWidgetWeatherTable/CardWidgetWeatherTable';
import WeatherIcons from 'react-weathericons';
import '../../../Assets/Styles/weather-icons.css';

class WidgetWeatherReport extends Component {
 render(){
    const tableList = [
        {
            id: 0,
            name:'Wind',
            value:'ESE 17 mph'
        },
        {
            id: 1,
            name:'Humidity',
            value:'83%'
        },
        {
            id: 2,
            name:'Pressure',
            value:'28.56 in'
        },
        {
            id: 3,
            name:'Cloud Cover',
            value:'78%'
        },
        {
            id: 4,
            name:'Ceiling',
            value:'25760 ft'
        },
    ]
    // weather select option list
    const weatherList = [
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
        <div className="col-lg-6">
        <div className="widgetweather-card">
            {/* weather title */}
            <div className="widgetweather-card-body">
                <div className="widgetweather-table">
                    <CardTitlewithOptions 
                        titleName="Weather Report"
                        optionList={weatherList}
                    />
                </div> 
            </div>
            {/* weather icon */}
            <div className="widgetweather-card-icon-body">
                <div className="widgetweather-weather">
                    <div className="widgetweather-weather-icon">
                        <h1 className="widgetweather-weather-icon-wi">
                            <WeatherIcons name="day-showers" size="lg" style={WeatherIconsStyle} />
                        </h1>
                        <h1 className="widgetweather-weather-icon-h1">73</h1>
                        <sup className="widgetweather-weather-icon-sup">°</sup>
                    </div>
                    <div className="widgetweather-weather-area">
                        <h3>Saturday</h3>
                        <small>Ahmedabad, India</small>
                    </div>
                </div>
                {/* weather table */}
                <div className="projectomonth-table-responsive">
                <table className="projectomonth-table">
                    <tbody>
                    {
                        tableList.map((item, index) => (
                            <CardWidgetWeatherTable 
                                key={index}
                                name={item.name}
                                value={item.value}
                            />
                        ))
                    }
                    </tbody>
                </table>
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

export default WidgetWeatherReport;