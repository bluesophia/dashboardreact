import React, { Component } from 'react';
import './VisitStatasticsPiechart.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
class VisitStatasticsPiechart extends Component {
    render(){
        const data = [
                {name: 'A', value: 400}, 
                {name: 'B', value: 300},
                {name: 'C', value: 200}
            ]
        const COLORS = ['#FFF', '#7d5db1', '#1FC0C7'];

        return(
            <div className="row">
                <div className="col-lg-8 col-md-12 visitStatasticse-pie-chart">
                    <div className="visitStatasticse-pie-card">
                        <div className="visitStatasticse-pie-card-body">
                            <div className="visitStatasticse-pie-card-title">
                                <h5>VISIT STATASTICS</h5>
                            </div>
                            <div className="row">
                                <div className="col-6  visitStatasticse-pie-card-lefttext">
                                    <h1>$347</h1>
                                    <p>APRIL 2017</p>
                                    <b>(150 Sales)</b>
                                </div>
                                <div className="col-6 visitStatasticse-pie-card-righttext">
                                <ResponsiveContainer width={100}>
                                <PieChart  width={50} height={50}>
                                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={45} fill="#8884d8" stroke="none">
                                    {
                                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length] }/>)
                                    }
                                    </Pie>
                                <Tooltip/>
                                </PieChart>
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

const TooltipStyle = {
    fontSize: "10px"
}
export default VisitStatasticsPiechart;