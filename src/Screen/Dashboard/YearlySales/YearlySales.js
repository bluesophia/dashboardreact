import React, { Component } from 'react';
import './YearlySales.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Dot } from 'recharts';
class YearlySales extends Component {
    render(){
        const data = [
            {name: '2010', Iphone: 50, Ipad: 80, IpadTouch: 20},
            {name: '2011', Iphone: 130, Ipad: 100, IpadTouch: 80},
            {name: '2012', Iphone: 80, Ipad: 60, IpadTouch: 70},
            {name: '2013', Iphone: 70, Ipad: 200, IpadTouch: 140},
            {name: '2014', Iphone: 180, Ipad: 150, IpadTouch: 140},
            {name: '2015', Iphone: 105, Ipad: 100, IpadTouch: 80},
            {name: '2016', Iphone: 250, Ipad: 150, IpadTouch: 200},
      ];
        return(
            <div className="row">
                <div className="col-lg-8 col-md-12 yearlysales-line-chart">
                    <div className="yearlysales-line-card">
                        <div className="yearlysales-line-card-body">
                            <div className="yearlysales-line-card-title">
                                <h5>YEARLY SALES</h5>
                                <div className="yearlysales-line-card-contents">
                                    <ul className="list-inline">
                                        <li><div className="circle-blue"></div> Iphon </li>
                                        <li><div className="circle-ornage"></div> Ipad </li>
                                        <li><div className="circle-purple"></div> Ipad </li>
                                    </ul>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={340}>
                            <LineChart width={600} height={300} data={data}
                                    margin={{top: 5, right: 30, left: -20, bottom: 5}}>
                            <XAxis dataKey="name" tickSize={0} tickMargin={10} style={AxisStyle}/>
                            <YAxis axisLine={false} tickSize={0} tickMargin={10} style={AxisStyle}/>
                            <Tooltip/>
                            <CartesianGrid verticalCoordinatesGenerator />
                            <Line type="monotone" dataKey="Iphone" stroke="#1FC0C7" fill='#1FC0C7' strokeWidth={3} dot={{ stroke: '#1FC0C7', strokeWidth: 1 }}/>
                            <Line type="monotone" dataKey="Ipad" stroke="#fb9678" fill='#fb9678' strokeWidth={3} dot={{ stroke: '#fb9678', strokeWidth: 1 }}/>
                            <Line type="monotone" dataKey="IpadTouch" stroke="#ab8ce4" fill='#ab8ce4' strokeWidth={3} dot={{ stroke: '#ab8ce4', strokeWidth: 1 }}/>
                            </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const AxisStyle = {
    fontSize: "12px"
}

export default YearlySales;