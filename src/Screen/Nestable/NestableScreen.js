import React, { Component } from 'react';
import { Nestable1, Nestable2, Nestable3 } from './NestableExports.js';
import './NestableScreen.css';

class NestableScreen extends Component {
    render(){
        return(
            <div className="nestablescreen-wrapper">
                <Nestable1 />
                <Nestable2 />
                <Nestable3 />
            </div>
        )
    }
}

export default NestableScreen;