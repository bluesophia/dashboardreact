import React, { Component } from 'react';
import { WidgetRecentcomments, WidgetProjectoftheMonth, 
    WidgetTodoList, Messages, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                <WidgetRecentcomments />
                <WidgetTodoList />
                <WidgetProjectoftheMonth />
                <Messages />
                <Chat />
            </div>
        )
    }
}

export default WidgetApps;