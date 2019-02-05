import React, { Component } from 'react';
import './SalesOverview.css'
import CardSalesOverviewOptions from '../../../Components/CardSalesOverviewOptions/CardSalesOverviewOptions'

class SalesOverview extends Component {
 render(){
     return(
        <div className="col-lg-6">
        <div className="salestable-card">
            <div className="salestable-card-body">
                <div className="salestable-table">
                    {/* header */}
                    <CardSalesOverviewOptions />
                </div> 
            </div>
            {/* end header */}
            <div className="salestable-mid-card-body">
                <div className="row">
                    <div className="col-6">
                        <h3 className="salestable-mid-card-title">March 2017</h3>
                        <h5 className="salestable-mid-card-content">Report for this month</h5></div>
                    <div className="col-6 salestable-mid-card-price">
                        <h2 className="text-success">$3,690</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
     )
    }   
}

export default SalesOverview;