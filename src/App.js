import React, { Component } from 'react';
import DashboardScreen from './Screen/Dashboard/DashboardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          {/* <DashboardScreen /> */}
          <ProfileScreen />
        </div>
      </div>
    );
  }
}

export default App;
 