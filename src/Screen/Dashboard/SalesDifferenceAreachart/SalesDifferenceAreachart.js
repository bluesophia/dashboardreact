import React, { Component } from 'react';
import './SalesDifferenceAreachart.css';
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, CartesianGrid } from 'recharts';
class SalesDifferenceAreachart extends Component {
    render(){
        const data = [
            {name: '2010', uv: 0, pv: 0, amt: 2400},
            {name: '2011', uv: 100, pv: 130, amt: 2400},
            {name: '2012', uv: 60, pv: 80, amt: 2210},
            {name: '2013', uv: 200, pv: 70, amt: 2400},
            {name: '2014', uv: 150, pv: 180, amt: 2290}
      ];
        return(
            <div className="row">
                <div className="col-lg-8 col-md-12 sales-difference-area-chart">
                    <div className="sales-difference-area-card">
                        <div className="sales-difference-area-card-body">
                            <div className="sales-difference-area-card-title">
                                <h5>SALES DIFFERENCE</h5>
                                <div className="sales-difference-area-card-contents">
                                    <ul className="list-inline">
                                        <li><div className="circle-blue"></div> SITE A</li>
                                        <li><div className="circle-red"></div> SITE B</li>
                                    </ul>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={340}>
                            <AreaChart data={data} style={AreaChartStyle} >
                                <XAxis dataKey="name" tickSize={0} tickMargin={10}/>
                                <YAxis axisLine={false} tickSize={0} tickMargin={10}/>
                                <CartesianGrid verticalCoordinatesGenerator />
                                <Tooltip/>1FC0C7
                                <Area type='monotone' dataKey='uv' stroke='none' fill='rgb(13, 219, 228)' fillOpacity='0.4' />
                                <Area type='monotone' dataKey='pv' stroke='none' fill=' rgb(226, 229, 234)' fillOpacity='0.4'/>
                            </AreaChart>    
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const AreaChartStyle = {
    margin: "10px 30px 0 -25px",
    fontSize: "12px"
}

export default SalesDifferenceAreachart;