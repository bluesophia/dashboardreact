import React, { Component } from 'react';
import './CardWidgetWeatherTable.css';

class CardWidgetWeatherTable extends Component {
    render(){
        const { name, value } = this.props;
        return(
                <tr className="widgetweather-table-tr">
                    <td>{name}</td>
                    <td>{value}</td>
                </tr>
        )
    }
}

export default CardWidgetWeatherTable;