import React, { Component } from 'react';
import Infobox from './Screen/Dashboard/Infobox/Infobox';
import WeatherBox from './Screen/Dashboard/Weatherbox/Weatherbox';
import CardCommentBox from './Components/CardCommentbox/CardCommentbox';
import Recentcomments from './Screen/Dashboard/Recentcomments/Recentcomments';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Infobox />
        <WeatherBox />
        <CardCommentBox />
        <Recentcomments />
      </div>
    );
  }
}

export default App;
