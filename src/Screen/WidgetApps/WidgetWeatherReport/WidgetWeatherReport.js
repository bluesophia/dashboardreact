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
            assignedName: 'Sunil Joshi',
            job: 'Web Designer',
            name:'Elite Admin',
            circleName: 'S',
            status: 'sale',
            date: 'April 18, 2017',
            budget: '3.9',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--cyan)'
        },
        {
            id: 1,
            assignedName: 'Andrew',
            job: 'Project Manager',
            name:'Real Homes',
            src: 'http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/2.jpg',
            status: 'extended',
            date: 'April 19, 2017',
            budget: '23.9',
            badgeBackground: '#03a9f3'
        },
        {
            id: 2,
            assignedName: 'Bhavesh patel',
            job: 'Developer',
            name:'MedicalPro Theme',
            circleName: 'B',
            status: 'extended',
            date: 'April 19, 2017',
            budget: '12.9',
            badgeBackground: '#03a9f3',
            backgroundColor: 'var(--teal)'
        },
        {
            id: 3,
            assignedName: 'Nirav Joshi',
            job: 'Frontend Eng',
            name:'Elite Admin',
            circleName: 'N',
            status: 'tax',
            date: 'April 20, 2017',
            budget: '10.9',
            badgeBackground: '#E26B78',
            backgroundColor: 'var(--primary)'
        },
        {
            id: 4,
            assignedName: 'Micheal Doe',
            job: 'Content Writer',
            name:'Helping Hands',
            circleName: 'M',
            status: 'sale',
            date: 'April 21, 2017',
            budget: '12.9',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--yellow)'
        },
        {
            id: 5,
            assignedName: 'Johnathan',
            job: 'Graphic',
            name:'Digital Agency',
            circleName: 'N',
            status: 'sale',
            date: 'April 23, 2017',
            budget: '2.6',
            badgeBackground: '#20c997',
            backgroundColor: 'var(--red)'
        }
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
                                src={item.src}
                                assignedName={item.assignedName}
                                name={item.name}
                                job={item.job}
                                circleName={item.circleName}
                                priority={item.priority}
                                budget={item.budget}
                                backgroundColor={item.backgroundColor}
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