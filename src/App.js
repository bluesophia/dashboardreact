import React, { Component } from 'react';
import CardInfobox from './Components/CardInfobox/CardInfobox';
import CardWeatherBox from './Components/CardWeatherbox/CardWeatherbox';
import CardCommentBox from './Components/CardCommentbox/CardCommentbox'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardInfobox />
        <CardWeatherBox />
        <CardCommentBox />
      </div>
    );
  }
}

export default App;
