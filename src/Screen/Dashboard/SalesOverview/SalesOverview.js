import React, { Component } from 'react';
import './SalesOverview.css'

class SalesOverview extends Component {
 render(){
     return(
        <div class="col-lg-6">
        <div class="salestable-card">
            <div class="salestable-card-body">
                <div class="salestable-table">
                    {/* header */}
                    {/* <div>
                        <h5 class="salestable-card-title">Sales Overview</h5>
                        <h6 class="salestable-card-subtitle">Check the monthly sales </h6>
                    </div>
                    <div class="ml-auto">
                        <select class="form-control b-0">
                            <option>January</option>
                            <option value="1">February</option>
                            <option value="2" selected="">March</option>
                            <option value="3">April</option>
                        </select>
                    </div> */}
                    {/* end header */}
                    {/* <div class="salestable-mid-card-body">
                        <div class="row">
                            <div class="col-6">
                                <h3>March 2017</h3>
                                <h5 class="font-light m-t-0">Report for this month</h5></div>
                            <div class="col-6 align-self-center display-6 text-right">
                                <h2 class="text-success">$3,690</h2>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>  
        </div>
        </div>
     )
 }   
}

export default SalesOverview;