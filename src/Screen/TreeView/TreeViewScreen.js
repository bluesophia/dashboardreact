import React, { Component } from 'react';
import { TreeviewDefault } from './TreeViewExports.js';
import './TreeViewScreen.css'

class TreeViewScreen extends Component {
    render(){
        return(
            <div className="treeviewScreen-wrapper">
                <div><TreeviewDefault /></div>
            </div>
        )
    }
}

export default TreeViewScreen;