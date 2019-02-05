import React, { Component } from 'react';
import './CardSalesOverviewOptions.css';

class CardSalesOverviewOptions extends Component {
    render(){
        return(
            <div>
                <div>
                    <h5 className="salestable-card-title">Sales Overview</h5>
                    <h6 className="salestable-card-subtitle">Check the monthly sales </h6>
                </div>
                <div className="salestable-card-option">
                    <select className="salestable-form-control">
                        <option>January</option>
                        <option value="1">February</option>
                        <option value="2" selected="">March</option>
                        <option value="3">April</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default CardSalesOverviewOptions;