import React, { Component } from 'react';
import { Infobox, YearlySales, Weatherbox, Commentbox, Recentcomments, SalesOverview, 
    SalesDifferenceAreachart, SalesDifferenceBarchart, VisitStatasticsPiechart,
    TodoList, Messages, Chat, DashboardChat } from './DashboardExports';

class DashboardScreen extends Component {
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
                <DashboardChat />
            </div>
        )
    }
}

export default DashboardScreen;