import React, { Component } from 'react';
import { WidgetRecentcomments, Weatherbox, Commentbox, SalesOverview, 
    TodoList, Messages, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                <WidgetRecentcomments />
                <Weatherbox />
                <Commentbox />
                <SalesOverview />
                <TodoList />
                <Messages />
                <Chat />
            </div>
        )
    }
}

export default WidgetApps;