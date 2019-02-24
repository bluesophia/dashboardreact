import React, { Component } from 'react';
import './Nestable1.css';
import Nestable from 'react-nestable';

// Nestable1tListist => id must be unique    


const Nestable1tList = [
    {   
        id: 0,
        text: 'Item 1'
    },
    {
        id:1,
        text: 'Item 2',
        children: [
            { id:2, text: 'Item 3' },
            { id:3, text: 'Item 4' },
            { id:4, text: 'Item 5', 
                children: [
                    {id:5, text: 'Item 6' }, 
                    {id:6, text: 'Item 7' }, 
                    {id:7, text: 'Item 8' }
                ]
            },
            { id:8, text: 'Item 9' },
            { id:9, text: 'Item 10' },
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

class Nestable1 extends Component {
    render(){
        return(
            <div className="nestable1-row">
                <div className="nestable1-col-lg-6">
                    <div className="nestable1-card">
                        <div className="nestable1-card-body">
                            <h5 className="nestable1-card-title">Nestable1</h5>
                        </div>
                        <Nestable
                            collapsed={false}
                            items={Nestable1tList}
                            renderItem={renderItem}
                        />
                    </div>
                </div>
            </div>  
        )
    }   
}
export default Nestable1;