import React, { Component } from 'react';
import './CardSalesOverviewReportprice.css';

class CardSalesOverviewReportprice extends Component {
    render(){
        return(
            <div className="salestable-mid-card-body">
                <div className="salestable-mid-card-body-row">
                    <div className="col-6">
                        <h3 className="salestable-mid-card-title">March 2017</h3>
                        <h5 className="salestable-mid-card-content">Report for this month</h5></div>
                    <div className="col-6 salestable-mid-card-price">
                        <h2 className="text-success">$3,690</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSalesOverviewReportprice;