import React, { Component } from 'react';
import './SalesDifferenceBarchart.css';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, CartesianGrid } from 'recharts';
class SalesDifferenceBarchart extends Component {
    render(){
        const data = [
            {name: '2010', uv: 2},
            {name: '2011', uv: 17},
            {name: '2012', uv: 20},
            {name: '2013', uv: 15},
            {name: '2014', uv: 9},
            {name: '2014', uv: 10},
            {name: '2014', uv: 12}
      ];
        return(
            <div className="row">
                <div className="col-lg-8 col-md-12 sales-difference-area-chart">
                    <div className="sales-difference-bar-card">
                        <div className="sales-difference-bar-card-body">
                            <div className="sales-difference-bar-card-title">
                                <h5>SALES DIFFERENCE</h5>
                            </div>
                            <div className="row">
                                <div className="col-6  sales-difference-bar-card-lefttext">
                                    <h1>$647</h1>
                                    <p className="text-muted">APRIL 2017</p>
                                    <b>(150 Sales)</b>
                                </div>
                                <div className="col-6 sales-difference-bar-card-righttext">
                                <ResponsiveContainer width={88} height={154} style={ResponsiveContainerStyle}>
                                <BarChart data={data}>
                                    <Tooltip />
                                    <Bar dataKey="uv" fill="#03a9f3" barSize={4}/>
                                </BarChart>
                                </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const ResponsiveContainerStyle = {
    marginRight: 0
}

export default SalesDifferenceBarchart;