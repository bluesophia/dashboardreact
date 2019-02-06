import React, { Component } from 'react';
import Infobox from './Screen/Dashboard/Infobox/Infobox';
import WeatherBox from './Screen/Dashboard/Weatherbox/Weatherbox';
import CommentBox from './Screen/Dashboard/Commentbox/Commentbox';
import Recentcomments from './Screen/Dashboard/Recentcomments/Recentcomments';
import SalesOverview from './Screen/Dashboard/SalesOverview/SalesOverview';
import SalesDifferenceAreachart from './Screen/Dashboard/SalesDifferenceAreachart/SalesDifferenceAreachart';
import SalesDifferenceBarchart from './Screen/Dashboard/SalesDifferenceBarchart/SalesDifferenceBarchart';
import VisitStatasticsPiechart from './Screen/Dashboard/VisitStatasticsPiechart/VisitStatasticsPiechart';
import YearlySales from './Screen/Dashboard/YearlySales/YearlySales';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infobox />
        <WeatherBox />
        <CommentBox />
        <Recentcomments />
        <SalesOverview />
        <SalesDifferenceAreachart />
        <SalesDifferenceBarchart />
        <VisitStatasticsPiechart />
        <YearlySales />
      </div>
    );
  }
}

export default App;
