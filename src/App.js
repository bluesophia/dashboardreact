import React, { Component } from 'react';
import { Infobox, YearlySales, Weatherbox, Commentbox, Recentcomments, SalesOverview, 
          SalesDifferenceAreachart, SalesDifferenceBarchart, VisitStatasticsPiechart,
          TodoList, Messages, Chat
} from './Screen/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
