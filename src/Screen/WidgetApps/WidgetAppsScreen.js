import React, { Component } from 'react';
import { WidgetRecentcomments, Weatherbox, Commentbox, SalesOverview, 
    WidgetTodoList, Messages, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                <WidgetRecentcomments />
                <WidgetTodoList />
                <Weatherbox />
                <Commentbox />
                <SalesOverview />
                <Messages />
                <Chat />
            </div>
        )
    }
}

export default WidgetApps;