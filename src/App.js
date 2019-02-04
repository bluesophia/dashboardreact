import React, { Component } from 'react';
import CardInfobox from './Components/CardInfobox/CardInfobox';
import CardWeatherBox from './Components/CardWeatherbox/CardWeatherbox';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardInfobox />
        <CardWeatherBox />
      </div>
    );
  }
}

export default App;
