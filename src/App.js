import React, { Component } from 'react';
import { DashboardScreen, AlertScreen, ProfileScreen, InvoiceScreen, LoginScreen,
          TimelineScreen, PricingScreen, WidgetAppsScreen, TreeViewScreen } from './Screen/ScreenExports';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <ToastContainer/> 
          
          {/* <DashboardScreen />
          <ProfileScreen />
          <InvoiceScreen />
          <LoginScreen />
          <TimelineScreen />
          <PricingScreen />
          <AlertScreen />
          <WidgetAppsScreen />  */}
          <TreeViewScreen />
        </div>
      </div>
    );
  }
}

export default App;
 