import React, { Component } from 'react';
import DashboardScreen from './Screen/Dashboard/DashboardScreen';
import ProfileScreen from './Screen/Profile/ProfileScreen';
import InvoiceScreen from './Screen/Invoice/InvoiceScreen';
import LoginScreen from './Screen/Login/LoginScreen';
import TimelineScreen from './Screen/Timeline/TimelineScreen';
import PricingScreen from './Screen/Pricing/PricingScreen';
import AlertScreen from './Screen/Alert/AlertScreen';
import WidgetAppsScreen from './Screen/WidgetApps/WidgetAppsScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <ToastContainer/> 
          <DashboardScreen />
          {/* <ProfileScreen />
          <InvoiceScreen />
          <LoginScreen />
          <TimelineScreen />
          <PricingScreen />
          <AlertScreen /> */}
          <WidgetAppsScreen />
        </div>
      </div>
    );
  }
}

export default App;
 