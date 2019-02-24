import React, { Component } from 'react';
import { Nestable1, Nestable2 } from './NestableExports.js';

class NestableScreen extends Component {
    render(){
        return(
            <div className="nestablescreen-wrapper">
                <Nestable1 />
                <Nestable2 />
            </div>
        )
    }
}

export default NestableScreen;