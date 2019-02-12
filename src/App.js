import React, { Component } from 'react';
import DashboardScreen from './Screen/Dashboard/DashboardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import InvoiceScreen from './Screen/Invoice/InvoiceScreen';
import LoginScreen from './Screen/Login/LoginScreen';
import TimelineScreen from './Screen/Timeline/TimelineScreen';
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <DashboardScreen />
          <ProfileScreen />
          <InvoiceScreen />
          <LoginScreen />
          <TimelineScreen />
        </div>
      </div>
    );
  }
}

export default App;
 