import React, { Component } from 'react';
import './Nestable1.css';
import Nestable from 'react-nestable';

// Nestable1tListist => id must be unique    
const styles = {
    position: "relative",
    padding: "10px 15px",
    fontSize: "20px",
    border: "1px solid #f9fafa",
    background: "#f9fafa",
    cursor: "pointer"
  };
const Nestable1tList = [
    {   
        id: 0,
        text: 'item 1'
    },
    {
        id:1,
        text: 'item 2',
        children: [
            { id:2, text: 'item 3' },
            { id:3, text: 'item 4' },
            { id:4, text: 'item 5', 
                children: [
                    {id:5, text: 'item 6' }, 
                    {id:6, text: 'item 7' }, 
                    {id:7, text: 'item 8' }
                ]
            },
            { id:8, text: 'item 9' },
            { id:9, text: 'item 10' },
        ]
    }
  ];
      
    // renderItem  
    const renderItem = ({ item, collapseIcon, handler }) => {
        return (
          <div style={styles}>
            {handler}
            {collapseIcon}
            {item.text}
          </div>
        );
    };
    // renderIcon for collapsed
    // const renderIcon = ({ isCollapsed  }) => {
    //     <DefaultIcon />
    // }

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
                            collapseIcon={collapseIcon}
                            // className="nestable"
                        />
                    </div>
                </div>
            </div>  
        )
    }   
}

export default Nestable1;