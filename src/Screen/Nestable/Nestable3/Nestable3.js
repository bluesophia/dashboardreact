import React, { Component } from 'react';
import './Nestable3.css';
import Nestable from 'react-nestable';

// Nestable3Listist => id must be unique    
const Nestable3tList = [
    {   
        id: 0,
        text: 'Item 13'
    },
    {   
        id: 0,
        text: 'Item 13'
    },
    {   
        id: 1,
        text: 'Item 14'
    },
    {
        id:2,
        text: 'Item 15',
        children: [
            { id:3, text: 'Item 16' },
            { id:4, text: 'Item 17' },
            { id:5, text: 'Item 18' },
            { id:6, text: 'Item 19' },
            { id:7, text: 'Item 20' },
            { id:7, text: 'Item 21' },
        ]
    }
  ];
      
    // renderItem  
    const renderItem = ({ item, collapseIcon, handler }) => {
        return (
          <div>
            {handler}
            {collapseIcon}
            {item.text}
          </div>
        );
    };

class Nestable3 extends Component {
    render(){
        return(
            <div className="nestable3-row">
                <div className="nestable3-col-lg-6">
                    <div className="nestable3-card">
                        <div className="nestable3-card-body">
                            <h5 className="nestable3-card-title">Nestable3</h5>
                        </div>
                        <div>
                        <div>
                        <Nestable
                            collapsed={false}
                            items={Nestable3tList}
                            renderItem={renderItem}
                        />
                        </div>   
                        </div>
                    </div>
                </div>
            </div>  
        )
    }   
}
export default Nestable3;