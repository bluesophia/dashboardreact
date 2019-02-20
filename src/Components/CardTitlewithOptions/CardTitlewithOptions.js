import React, { Component } from 'react';
import './CardTitlewithOptions.css';

// option class
class Options extends Component {
    render(){
        return(
            <option>{this.props.name}</option>
        )
    }
}


class CardTitlewithOptions extends Component {  
    constructor(props){
        super(props);
        this.state= {
            optionList: this.props.optionList
        }
    }
    render(){

        const { titleName, optionList=[], fontSize, fontWeight } = this.props; 

        return(
            <div>
                <div>
                    <h5 className="titlewithoption-card-title" style={{fontSize: fontSize, fontWeight: fontWeight}}>
                        {titleName}
                    </h5>
                </div>
                <div className="titlewithoption-card-option">
                <select className="titlewithoption-select">
                {
                    optionList.map((item, index) => (
                        <Options name={item.name} />
                    ))
                }
                </select>
                </div>
            </div>
        )
    }
}

export default CardTitlewithOptions;