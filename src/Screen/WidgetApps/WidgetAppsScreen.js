import React, { Component } from 'react';
import { Infobox, YearlySales, Weatherbox, Commentbox, Recentcomments, SalesOverview, 
    SalesDifferenceAreachart, SalesDifferenceBarchart, VisitStatasticsPiechart,
    TodoList, Messages, Chat } from './WidgetAppsExports';

class WidgetApps extends Component {
    render(){
        return(
            <div>
                <Infobox />
                <YearlySales />
                <Weatherbox />
                <Commentbox />
                <Recentcomments />
                <SalesOverview />
                <SalesDifferenceAreachart />
                <SalesDifferenceBarchart />
                <VisitStatasticsPiechart />
                <TodoList />
                <Messages />
                <Chat />
            </div>
        )
    }
}

export default WidgetApps;