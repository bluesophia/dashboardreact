import React, { Component } from 'react';
import { Weatherbox, Commentbox, SalesOverview, 
    SalesDifferenceAreachart, SalesDifferenceBarchart, VisitStatasticsPiechart,
    TodoList, Messages, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
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