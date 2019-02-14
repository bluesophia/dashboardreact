import React, { Component } from 'react';
import DashboardScreen from './Screen/Dashboard/DashboardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import InvoiceScreen from './Screen/Invoice/InvoiceScreen';
import LoginScreen from './Screen/Login/LoginScreen';
import TimelineScreen from './Screen/Timeline/TimelineScreen';
import PricingScreen from './Screen/Pricing/PricingScreen';
import AlertScreen from './Screen/Alert/AlertScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          {/* <DashboardScreen />
          <ProfileScreen />
          <InvoiceScreen />
          <LoginScreen />
          <TimelineScreen />
          <PricingScreen /> */}
          <AlertScreen />
          <ToastContainer
            autoClose={false}
          />
        </div>
      </div>
    );
  }
}

export default App;
 