import React, { Component } from 'react';
import './Nestable2.css';
import Nestable from 'react-nestable';

// Nestable12Listist => id must be unique    
const Nestable2tList = [
    {   
        id: 0,
        text: 'Item 13'
    },
    {   
        id: 1,
        text: 'Item 14'
    },
    {   
        id: 3,
        text: 'Item 16'
    },
    {   
        id: 4,
        text: 'Item 17'
    },
    {   
        id: 5,
        text: 'Item 18'
    },
    {   
        id: 6,
        text: 'Item 19'
    },
    {
        id:2,
        text: 'Item 15',
        children: [
            { id:2, text: 'Item 16' },
            { id:3, text: 'Item 17' },
            { id:4, text: 'Item 18' }
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