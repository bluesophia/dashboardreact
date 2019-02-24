import React, { Component } from 'react';
import { Nestable1 } from './NestableExports.js';
import './NestableScreen.css'

class NestableScreen extends Component {
    render(){
        return(
            <div className="nestablescreen-wrapper">
                <div><Nestable1 /></div>
            </div>
        )
    }
}

export default NestableScreen;