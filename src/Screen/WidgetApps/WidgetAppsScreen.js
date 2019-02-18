import React, { Component } from 'react';
import { WidgetRecentcomments, WidgetProjectoftheMonth, 
    WidgetTodoList, WidgetWeatherReport, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                <WidgetRecentcomments />
                <WidgetTodoList />
                <WidgetProjectoftheMonth />
                <WidgetWeatherReport />
                <Chat />
            </div>
        )
    }
}

export default WidgetApps;