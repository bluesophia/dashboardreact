import React, { Component } from 'react';
import { WidgetRecentcomments, WidgetProjectoftheMonth, 
    WidgetTodoList, WidgetWeatherReport, WidgetRecentChat, WidgetChatDifferentOption,
    WidgetRecentMessages, WidgetProfileDetail, WidgetBrowserStats, WidgetSubscribe,
    WidgetProfile
} from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                {/* <WidgetRecentcomments />
                <WidgetTodoList />
                <WidgetProjectoftheMonth />
                <WidgetWeatherReport />
                <WidgetRecentChat />
                <WidgetChatDifferentOption />
                <WidgetRecentMessages />
                <WidgetProfileDetail />
                <WidgetBrowserStats />
                <WidgetSubscribe /> */}
                <WidgetProfile/>
            </div>
        )
    }
}

export default WidgetApps;