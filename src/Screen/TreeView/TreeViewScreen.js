import React, { Component } from 'react';
import { TreeviewDefault, TreeviewCollapsed, TreeviewTagedasBadges,
        TreeviewBlueTheme, TreeviewCustomIcons, TreeviewExpanded,
        TreeviewSearchableTree, TreeviewSearchableTreeInput
} from './TreeViewExports.js';
import './TreeViewScreen.css'

class TreeViewScreen extends Component {
    render(){
        return(
            <div>
            <div className="treeviewScreen-wrapper">
                <TreeviewDefault />
                <TreeviewCollapsed />
                <TreeviewTagedasBadges />
            </div>
            <div className="treeviewScreen-wrapper">
                <TreeviewBlueTheme />
                <TreeviewCustomIcons />
                <TreeviewExpanded />
            </div>
            <div className="treeviewScreen-wrapper">
                <TreeviewSearchableTreeInput />
                <TreeviewSearchableTree />
            </div>
            </div>
        )
    }
}

export default TreeViewScreen;