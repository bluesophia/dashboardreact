import React, { Component } from 'react';
import './CardTitlewithOptions.css';

class CardTitlewithOptions extends Component {  
    render(){
        const selectList = [
        {
            id:0,
            name: 'January'
        },
        {
            id:1,
            name: 'February'
        },
        {
            id:2,
            name: 'March'
        },
        {
            id:3,
            name: 'April'
        },
    ]
        return(
            <div>
                <div>
                    <h5 className="titlewithoption-card-title">
                        Projects of the Month
                    </h5>
                </div>
                <div className="titlewithoption-card-option">
                <select className="titlewithoption-select">
                    {
                        selectList.map((item, index) => (
                        <option 
                            value={item.id + 1}
                            key={index}
                        >
                        {item.name}
                        </option>
                        ))
                    }
                </select>
                </div>
            </div>
        )
    }
}

export default CardTitlewithOptions;