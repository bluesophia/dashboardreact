import React, { Component } from 'react';
import './Nestable2.css';
import Nestable from 'react-nestable';

// Nestable12Listist => id must be unique    
const Nestable2tList = [
    {   
        id: 0,
        text: 'item 13'
    },
    {   
        id: 1,
        text: 'item 14'
    },
    {   
        id: 3,
        text: 'item 16'
    },
    {   
        id: 4,
        text: 'item 17'
    },
    {   
        id: 5,
        text: 'item 18'
    },
    {   
        id: 6,
        text: 'item 19'
    },
    {
        id:2,
        text: 'item 15',
        children: [
            { id:2, text: 'item 16' },
            { id:3, text: 'item 17' },
            { id:4, text: 'item 18' }
        ]
    },
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

class Nestable2 extends Component {
    render(){
        return(
            <div className="nestable2-row">
                <div className="nestable2-col-lg-6">
                    <div className="nestable2-card">
                        <div className="nestable2-card-body">
                            <h5 className="nestable2-card-title">Nestable2</h5>
                        </div>
                        <div>
                        <div>
                        <Nestable
                            collapsed={false}
                            items={Nestable2tList}
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
export default Nestable2;